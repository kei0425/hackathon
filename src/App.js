import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";

import { Header, Container } from 'components/StyledComponents';
import TopPage from 'components/TopPage';
import StorePage from 'components/StorePage';

class App extends Component {
  constructor(props) {
    super(props);

  }

  fetchAPI = (freeword) => {
    // ぐるなびのデータ取得
    return axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/", {
      params: {
        keyid: '99d6d6feb358f45acfb8744c35494276',
        freeword: freeword
      }});
  }

  // コメント・いいねデータ取得
  fetchComment = id => this.collection.where('id', '==', id)
    .get()
    .then(qs=>{
      let result = [];
      qs.forEach(d => result.push(
        Object.assign({cid:d.id}, d.data())));
      return result;
    });
    
  // タグいいねサマリ取得
  fetchCommentSummary = id => this.fetchComment(id).then(
    comments => comments.reduce((a,c) => {
    	let d = a[c.tag];
    	if (!d) {
    		d = {count:0, like: 0, unlike: 0};
    		a[c.tag] = d;
        }
    	d.count++;
    	d.like += c.like;
    	d.unlike += c.unlike;
    	return a;
    }, {}));
    
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


  render() {
    return (
      <div>
        <Container>
          <Route exact path={'/'} component={TopPage} />
          <Route exact path={'/store/:id'} component={StorePage} />
        </Container>
      </div>
    );
  }
}

export default App;
