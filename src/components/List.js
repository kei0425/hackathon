import React, { Component, Fragment } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

import styled from 'styled-components';
import StoreCard from 'components/Card';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default props => (
  <Wrapper>
    {
      props.list.map((v,i)=>{
        return (
          <StoreCard data={v} key={i} />
        )
      })
    }
  </Wrapper>
)
