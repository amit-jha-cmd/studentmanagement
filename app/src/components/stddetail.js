import React from 'react'
import { Button, Segment, Image, Modal, Divider, Label } from 'semantic-ui-react'
// import Stdchart from './stdelement'
import Marks from './markstable'
import Btngrp from './btngroup'
const ModalExampleTopAligned = (props) => (
  <Modal trigger={<Button>Show Details</Button>} centered={false}>
    <Modal.Header>Student details</Modal.Header>
    {props.data.then((value)=>{console.log(value)})}
    <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <div className="stdinfo">
                <Segment>
                    {console.log(props.json)}
                    <h3>{props.name}</h3>
                    <p>{props.usn}</p>
                    <Label>
                        Attendance
                        <Label.Detail>79.8%</Label.Detail>
                    </Label>
                    <Divider />
                </Segment>
            </div>
    </Modal.Content>
    <Modal.Content>
        <Btngrp />
    </Modal.Content>
    <Modal.Content>
        <Marks />
    </Modal.Content>
  </Modal>
)

export default ModalExampleTopAligned