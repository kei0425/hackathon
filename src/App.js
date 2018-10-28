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
