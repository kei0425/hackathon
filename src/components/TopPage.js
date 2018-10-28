import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Logo from 'assets/logo.png';

import { Input } from 'semantic-ui-react';
import styled from 'styled-components';
import { Header, Container } from 'components/StyledComponents';
import List from 'components/List';

const SearchWrapper = styled.div`
  margin-bottom: 24px;
`;

class TopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      apiData: [],
    };
  }

  handleChange = e => {
    this.setState({term: e.target.value});
    this.searchAPI(this.state.term);
  }

  searchAPI = (freeword) => {
    // ぐるなびのデータ取得
    return axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/", {
      params: {
        keyid: '55120792cdefd7b3b5a2762eb8ab0cab',
        freeword: freeword
      }}).then(v=>{
        this.setState({apiData: v.data.rest})
      });
  }

  componentDidMount() {
    this.searchAPI('五反田');
  }

  render() {
    return (
      <Fragment>
        <Header>
          <div style={{textAlign:'center'}}><Link to={'/'}><img src={Logo}/></Link></div>
        </Header>
        <SearchWrapper>
          <Input value={this.state.term} placeholder='Search...' onChange={this.handleChange} />
        </SearchWrapper>
        <List list={this.state.apiData} />
      </Fragment>
    );
  }
}

export default TopPage;
