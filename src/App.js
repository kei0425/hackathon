import React, { Component } from 'react';

import { Header, MainContainer } from 'components/StyledComponents';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: true,
    };
  }

  fetchAPI = () => {
    // ぐるなびのデータ取得
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
