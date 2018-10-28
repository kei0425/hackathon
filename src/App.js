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
          <Link to={'/'}>home</Link>
        </Header>
        <Container>
          <Route exact path={'/'} component={TopPage} />
          <Route exact path={'/store/:id'} component={StorePage} />
        </Container>
      </div>
    );
  }
}

export default App;
