import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Logo from 'assets/logo.png';

import { Header, Container } from 'components/StyledComponents';
import StoreInfo from 'components/StoreInfo';
import CommentForm from 'components/CommentForm';

import firebase from 'firebase';

class StorePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: [],
    };

    var config = {
      apiKey: "AIzaSyAUs6cS3bkcSFvO9ZFElNrcHqHiBS2DvDM",
      authDomain: "hackathon-7f2d1.firebaseapp.com",
      databaseURL: "https://hackathon-7f2d1.firebaseio.com",
      projectId: "hackathon-7f2d1",
      storageBucket: "hackathon-7f2d1.appspot.com",
      messagingSenderId: "983159093875"
    };
    firebase.initializeApp(config);

    this.collection = firebase.firestore().collection('hackathon');
  }

  // コメント・いいねデータ取得
  fetchComment = id => this.collection.where('id', '==', id)
    .get()
    .then(qs=>{
      let result = [];
      qs.forEach(d => result.push(
        Object.assign({cid:d.id}, d.data())));
        console.log(result);
      return result;
    });

  // コメント投稿
  // いいね セット
  // id: ぐるなび店舗ID
  // tag: タグ（ベジタリアンなど）
  // comment: コメント
  createComment = (id, tag, comment) => this.collection.add({
    id: id,
    tag: tag,
    like: 0,
    unlike: 0,
    comment: comment
  });

  // cid: コメントID
  // like: 1:like /-1: unlike
  changeReview = (cid, like) => this.collection.doc(cid).get().then(function(doc) {
    if (!doc.exists) {
      throw `No such document! ${cid}`;
    }
    let d = doc.data();

    if (like > 0) {
      return doc.update({like: d.like + like});
    }
    else {
      return doc.update({like: d.unlike - like});
    }
  });

  searchStore = id => {
    return axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/", {
      params: {
        keyid: '55120792cdefd7b3b5a2762eb8ab0cab',
        freeword: id
      }}).then(v=>{
        this.setState({store: v.data.rest[0]})
        console.log(v.data.rest);
      });
  }

  componentDidMount() {
    this.searchStore(this.props.match.params.id);
    this.fetchComment(9999);
  }

  render() {
    const { store } = this.state;
    return (
      <Fragment>
        <Header>
          <div><Link to={'/'}><img src={Logo} style={{width:'240px'}}/></Link></div>
        </Header>
        <StoreInfo
          data={store}
        />
        <CommentForm
          data={store}
        />
      </Fragment>
    );
  }
}

export default StorePage;
