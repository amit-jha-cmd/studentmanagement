import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Grid,
  Segment
} from 'semantic-ui-react';

const sortby = [
  { key: 'u', text: 'Usn', value: 'usn' },
  { key: 'n', text: 'Name', value: 'name' },
  { key: 'a', text: 'Attendance', value: 'attendance' }
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column style={{ flex: 1 }}>
              <Grid.Row style={{ margin: 10 }}>
                <Grid.Row>
                <h2> <Checkbox defaultChecked /> Attendance</h2>
                </Grid.Row>
              </Grid.Row>
              <Grid.Row>
                <Input
                  placeholder="Default: 75%"
                  style={{ margin: 10, width: "45%" }}
                ></Input>
                To
              <Input
                  placeholder="100%"
                  style={{ margin: 10, width: "45%" }}
                ></Input>
              </Grid.Row>
              <Grid.Row style={{margin: 20}}>
                
              </Grid.Row>
            </Grid.Column>
            <Grid.Column style={{ flex: 1 }}>
              <Grid.Row style={{ margin: 10 }}>
                <h2 > <Checkbox defaultChecked /> Marks</h2>
              </Grid.Row>
              <Grid.Row>
                <Input
                  placeholder="Default: 12"
                  style={{ margin: 10, width: "45%" }}
                ></Input>
                To
              <Input
                  placeholder="30"
                  style={{ margin: 10, width: "45%" }}
                ></Input>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ flex: 1, margin: 20 }}>
            <Grid.Column style={{ flex: 1 }}></Grid.Column>
            <Grid.Column style={{ flex: 1 }}>
              <Button style={{ width: "100%" }}>Search</Button>
            </Grid.Column>
            <Grid.Column style={{ flex: 1 }}></Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>
    )
  }
}

export default FormExampleFieldControl


{/* <Grid>
        <Grid.Column>
          <Grid>
            <Grid.Column>
              <Form style={{flex: 1, margin: 10, backgroundColor: "green"}}>
                <Form.Group widths='equal'>
                  <Form.Field
                    control={Select}
                    options={sortby}
                    placeholder='Sort By'
                  />
                </Form.Group>
                <Form.Field control={Button}>Submit</Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Row>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Field
                    control={Select}
                    options={sortby}
                    placeholder='Sort By'
                  />
                </Form.Group>
                <Form.Field control={Button}>Submit</Form.Field>
              </Form>
            </Grid.Row>
          </Grid>

        </Grid.Column>

      </Grid> */}
