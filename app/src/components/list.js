import React from 'react'
import {Card} from 'semantic-ui-react'
import Detail from './stddetail'
import fetchData from './apicalls';

var api = new fetchData()

const CardExampleGroups = (props) => (
  <Card.Group>
    {/* {console.log(api.student(props.usn))} */}
    {/* {api.student(props.usn).then((value)=> console.log(value))} */}
    <Card style={{width: "100%"}}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.usn}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Detail data={api.student(props.usn).then((value) =>{return value})}/>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups