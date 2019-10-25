import React, { Component } from 'react'
import { Form, Segment, Divider, Button, Grid, Label, Header, Icon } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]


class FormExampleSubcomponentControl extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <div style={{
                // width: "100%",
                // display: "grid",
                // placeItems: "center",
                // height: "100vh",
                // margin: 0,
                // boxShadow: "0px 10px 0px 10px black"
            }}>
                <Grid>
                    <Grid.Column style={{ flex: 1 }}>
                        {/* <h1 style={{ color: "white", textAlign: "center" }}>STUDENT FORM</h1> */}
                        <Segment style={{ width: "80%", marginTop: "10px", marginLeft: 130 }}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='First name' placeholder='First name' />
                                    <Form.Input fluid label='Last name' placeholder='Last name' />
                                    <Form.Select
                                        fluid
                                        label='Gender'
                                        options={options}
                                        placeholder='Gender'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                    <Form.Input fluid label='Last name' placeholder='Parent Name' />
                                    <Form.Select
                                        fluid
                                        label='Department'
                                        options={options}
                                        placeholder='EX: ISE'
                                    />
                                </Form.Group>
                                {/* <Form.Group inline>
                                <label>Size</label>
                                <Form.Radio
                                    label='Small'
                                    value='sm'
                                    checked={value === 'sm'}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label='Medium'
                                    value='md'
                                    checked={value === 'md'}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label='Large'
                                    value='lg'
                                    checked={value === 'lg'}
                                    onChange={this.handleChange}
                                />
                            </Form.Group> */}
                                <Form.TextArea label='Address' placeholder='Type Here' />
                                <Divider />
                                <Segment>
                                    <Form.Group widths='equal'>
                                        {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                        <Form.Input fluid label='Subject code' placeholder='Ex: 57PES21' />
                                        <Form.Input fluid label='Subject Name' placeholder='EX: Automata Theory' />
                                    </Form.Group>
                                    <Button content='Add More Subject' icon='plus' labelPosition='left' />
                                </Segment>

                                <Divider >
                                    <Header as='h4'>
                                        <Icon name='bar chart' />
                                        Specifications
                                    </Header>
                                </Divider>
                                <Segment>
                                    <Form.Group widths='equal'>
                                        {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                        <Form.Input fluid label='Week' placeholder='Ex: 2' />
                                        <Form.Input fluid label='Percentage' placeholder='EX: 0.71' />
                                    </Form.Group>
                                    <Button content='Add Week' icon='plus' labelPosition='left' />
                                </Segment>
                                <Form.Button>Submit</Form.Button>
                            </Form>
                        </Segment>
                        {/* IA MARKS SECTION */}
                    </Grid.Column>

                    <Divider vertical>Or</Divider>
                    <Grid.Column style={{ flex: 1 }}>

                        {/* <h1 style={{ color: "white", textAlign: "center" }}>STUDENT FORM</h1> */}
                        <Segment style={{ width: "80%", marginTop: "10px", height: "78vh" }}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Label size="large">Automate Theory</Label>
                                    <Form.Input fluid placeholder='IA-1' />
                                    <Form.Input fluid placeholder='IA-2' />
                                    <Form.Input fluid placeholder='IA-3' />
                                    {/* <Form.Select
                                        fluid
                                        label='Gender'
                                        options={options}
                                        placeholder='Gender'
                                    /> */}
                                </Form.Group>
                                <Form.Button>Submit</Form.Button>
                            </Form>
                        </Segment>
                        {/* IA MARKS SECTION */}
                    </Grid.Column>
                </Grid>


            </div>
        )
    }
}

export default FormExampleSubcomponentControl