import React, { Component } from 'react'
import { Form, Segment, Divider, Button, Grid, Dropdown, Label } from 'semantic-ui-react'
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
]

const university = [
    { key: 'pes', value: "pesu", text: 'PESIT' },
    { key: 'xyz', value: "xyz", text: 'XYZ' }
]

const subjects = [
    { key: "atc", value: "57CSE21", text: 'Automata Theory' },
    { key: "dc", value: "57CSE20", text: 'Data Communication' }
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
                    <Grid.Column style={{ flex: 1 }}></Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        {/* <h1 style={{ color: "white", textAlign: "center" }}>STUDENT FORM</h1> */}
                        <Segment style={{ width: "100%", marginTop: "50px", marginLeft: 0 }}>
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
                                <Dropdown
                                    // clearable
                                    fluid
                                    // multiple
                                    search
                                    selection
                                    options={university}
                                    placeholder="Choose your university"
                                />
                                <Form.Group widths='equal'>
                                    {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                    <Form.Input fluid label='University Seat Number' placeholder='EX: 1PE17IS011' />
                                    <Form.Input fluid label='Password' placeholder='EX: password123' />

                                </Form.Group>
                                <Divider />
                                <Segment>
                                    <b>Subject details</b>
                                    <Form.Group widths='equal'>
                                        {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                        {/* <Form.Input fluid label='Subject code' placeholder='Ex: 57PES21' /> */}
                                        <Dropdown
                                            clearable
                                            fluid
                                            multiple
                                            search
                                            selection
                                            options={subjects}
                                            placeholder='Subject'
                                        />
                                        {/* <Label size="big" fluid >Subject</Label> */}
                                        {/* <Form.Input fluid label='Subject Name' placeholder='EX: Automata Theory' /> */}
                                    </Form.Group>
                                    {/* <Button content='Add More Subject' icon='plus' labelPosition='left' /> */}
                                </Segment>
                                <Form.Button fluid>Submit</Form.Button>
                                <Divider horizontal>or</Divider>
                                <Form.Button fluid onClick={() => this.props.history.goBack()}>Login</Form.Button>
                            </Form>
                        </Segment>
                        {/* IA MARKS SECTION */}
                    </Grid.Column>

                    <Grid.Column style={{ flex: 1 }}></Grid.Column>
                </Grid>


            </div>
        )
    }
}

export default FormExampleSubcomponentControl