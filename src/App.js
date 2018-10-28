import React, { Component } from 'react';

import { Header, Container } from 'components/StyledComponents';
import List from 'components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: true,
    };
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
      <div>
        <Header>
          <h1>sample</h1>
        </Header>
        <Container>
          <List list={[1,2,3]} />
        </Container>
      </div>
    );
  }
}

export default App;
