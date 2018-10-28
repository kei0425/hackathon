import React, { Component } from 'react';
import axios from 'axios';

import { Header, MainContainer } from 'components/StyledComponents';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: true,
    };
  }

  fetchAPI = (freeword) => {
    // ぐるなびのデータ取得
    return axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/", {
      params: {
        keyid: '99d6d6feb358f45acfb8744c35494276',
        freeword: freeword
      }});
  }

  searchAPI = term => {
    // ぐるなび検索
  }

  fetchComment = id => {
    // コメント・いいねデータ取得
  }

  createComment = comment => {
    // コメント投稿
    // いいね セット
  }

  changeReview = review => {
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
