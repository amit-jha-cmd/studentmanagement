import React from 'react'
import { Card, Icon, Image, Label} from 'semantic-ui-react'
import Detail from './stddetail'

const StudentCard = (props) => (
  <Card>
      <Card.Content>
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Detail />
      </Card.Content>
    </Card>
)

export default StudentCard