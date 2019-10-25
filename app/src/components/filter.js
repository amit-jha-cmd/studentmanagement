import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Input,
  Radio,
  Grid,
  Segment,
  Label
} from 'semantic-ui-react';
import fetchData from './apicalls'
var api = new fetchData()
// const sortby = [
//   { key: 'u', text: 'Usn', value: 'usn' },
//   { key: 'n', text: 'Name', value: 'name' },
//   { key: 'a', text: 'Attendance', value: 'attendance' }
// ]

class FormExampleFieldControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usn: " ",
      attcheck: true,
      name: " "
    }
    this.data = null
    this.send = this.send.bind(this)
  }
  send() {
    // var title = this.state;
    // console.log(title)
    var temp = api.withfilter(this.state.usn, this.state.name, this.state.attcheck)
    // this.data = api.data;
    // console.log(this.data)
    temp.then((value) => {
      // this.data = value
      this.props.callback(value)
    });
    // this.props.callback(this.data)
  }
  handleChange = (e, { value }) => {
    this.setState({ [e.target.name]: value })
    // console.log(e.target.value)

  }

  render() {
    // const { value } = this.state
    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column style={{ flex: 1 }}>
              <Grid.Row style={{ margin: 10 }}>
                <Grid.Row>
                  <h2> Usn</h2>
                </Grid.Row>
              </Grid.Row>
              <Grid.Row>
                <Input
                  // placeholder="Default: 75%"
                  value={this.state.initatt}
                  name='usn'
                  style={{ margin: 10, width: "95%" }}
                  onChange={this.handleChange}
                // labelPosition="left"
                // type="text"
                >
                  <input />
                  {/* <Label>1PE</Label> */}
                </Input>
                {/* To
              <Input
                  placeholder="100%"
                  value={this.state.finatt}
                  name="finatt"
                  style={{ margin: 10, width: "45%" }}
                  onChange={this.handleChange}
                  labelPosition="right"
                  type="text"
                >
                  <input />
                  <Label>%</Label>
                </Input> */}
              </Grid.Row>
              <Grid.Row style={{ margin: 20 }}>
                <Checkbox defaultChecked onClick={() => {
                  if (this.state.attcheck === true) {
                    this.state.attcheck = false
                  }
                  else {
                    this.state.attcheck = true
                  }
                }} /><Label>By Name only</Label>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column style={{ flex: 1 }}>
              <Grid.Row style={{ margin: 10 }}>
                <h2 > Name</h2>
              </Grid.Row>
              <Grid.Row>
                <Input
                  value={this.state.initmarks}
                  name="name"
                  onChange={this.handleChange}
                  style={{ margin: 10, width: "95%" }}
                ></Input>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ flex: 1, margin: 20 }}>
            <Grid.Column style={{ flex: 1 }}></Grid.Column>
            <Grid.Column style={{ flex: 1 }}>
              <Button style={{ width: "100%" }} onClick={() => this.send()}>Search</Button>
            </Grid.Column>
            <Grid.Column style={{ flex: 1 }}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default FormExampleFieldControl
