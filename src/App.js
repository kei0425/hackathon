import React, { Component } from 'react';
import axios from 'axios';

import { Header, MainContainer } from 'components/StyledComponents';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: true,
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

  fetchAPI = (freeword) => {
    // ぐるなびのデータ取得
    return axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/", {
      params: {
        keyid: '99d6d6feb358f45acfb8744c35494276',
        freeword: freeword
      }});
  }

  fetchComment = id => {
    // コメント・いいねデータ取得
    
  }

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
  changeReview = review(cid, like) => {
    const docRef = this.collection.doc(cid);
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
    if (like > 0) {
      this.collection.update()
    }
    
    // いいね/悪いね
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <h1 className="App-title">sample</h1>
        </Header>
        <MainContainer>
        </MainContainer>
      </div>
    );
  }
}

export default App;
