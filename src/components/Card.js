import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import { Link } from "react-router-dom";

export default ({data}) =>{
  return (
    <Link to={`store/${data.id}`} >
      <Card>
        <Image src={data.image_url.shop_image1} />
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Meta>{data.address}</Card.Meta>
          <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='comment' />
            コメントを見る
          </a>
        </Card.Content>
      </Card>
    </Link>
  )
};
