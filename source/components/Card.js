import React from 'react';
import {Card, CardImg, CardText, CardBlock, CardTitle} from 'reactstrap';

export default function ImageCard({title, description, src, topMargin}) {
  return (
    <Card style={{textAlign: 'center'}}>
      <div style={{padding: !!topMargin && '1em'}}>
        <CardImg top style={{maxWidth: '100%', maxHeight: '40rem'}} src={src} alt="Card image cap" />
      </div>
      <CardBlock>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBlock>
    </Card>
  )
}
