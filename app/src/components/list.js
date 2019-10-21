import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Detail from './stddetail'

const CardExampleGroups = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.usn}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Detail usn={props.usn} name="Amit"/>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups