import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Logo from 'assets/logo.png';

import { Header, Container } from 'components/StyledComponents';
import StoreInfo from 'components/StoreInfo';
import CommentForm from 'components/CommentForm';

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
