import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { Header, Container } from 'components/StyledComponents';

class StorePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: [],
    };
  }

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
  }

  render() {
    const { store } = this.state;
    return (
      <Fragment>
        {store.name}
        {store.address}
      </Fragment>
    );
  }
}

export default StorePage;
