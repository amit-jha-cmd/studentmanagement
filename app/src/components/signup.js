import React, { Component } from 'react'
import { Form, Segment, Divider, Button, Grid, Dropdown, Checkbox } from 'semantic-ui-react'
import fetchData from './apicalls'

var api = new fetchData()

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
api.subjects().then((value)=> {
    var len = Object.keys(value).length
    for(let i = 0; i < len; i++){
        subjects.push({value: value[i].value, text: value[i].text})
    }
})

const subjects = [
]

const dept = [
    { key: "ise", value: "ise", text: 'Information Science' },
    { key: "cse", value: "cse", text: 'Computer Science' }
]


class FormExampleSubcomponentControl extends Component {
    state = {coordinator: false, subjects: {}, status: false, statusmsh: "", statusColor: ""}

    handleChange = (e, { value }) => this.setState({ value })

    manageChange = (e) => {
        // console.log(e.target.name)
        this.state[e.target.name] = e.target.value
    }

    singup = () => {
        api.singup(this.state).then((value) => {
            console.log(value)
            if(value.status === "error"){
                console.log(this.state.status)
                this.state.statusmsh = "Incorrect data or the user already exists"
                this.state.statusColor = "red"
                this.setState({status: true})
            }
            else if(value.status === "success"){
                console.log(value)
                this.state.statusmsh = "Success! Please go back and login"
                this.state.statusColor = "green"
                this.setState({status: true})
            }
        })
    }
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
                                    <Form.Input
                                        fluid
                                        onChange={(e) => this.manageChange(e)}
                                        label='First name'
                                        name="firstName"
                                        placeholder='First name' />
                                    <Form.Input
                                        fluid
                                        label='Last name'
                                        onChange={(e) => this.manageChange(e)}
                                        name="lastName"
                                        placeholder='Last name' />
                                    <Form.Select
                                        fluid
                                        id='gender'
                                        value={this.state.gender}
                                        onChange={(e, value) => this.setState({ gender: value.value })}
                                        // onChange={()=>console.log("something happend")}
                                        label='Gender'
                                        options={options}
                                        placeholder='Gender'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                    <Form.Input
                                        fluid
                                        label='Last name'
                                        onChange={(e) => this.manageChange(e)}
                                        name="parentName"
                                        placeholder='Parent Name' />
                                    <Form.Select
                                        fluid
                                        name="dept"
                                        onChange={(e, value) => this.setState({ dept: value.value })}
                                        label='Department'
                                        options={dept}
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
                                <Form.TextArea
                                    label='Address'
                                    name="address"
                                    placeholder='Type Here'
                                    onChange={(e) => this.manageChange(e)}
                                />
                                <Divider />
                                <Dropdown
                                    // clearable
                                    fluid
                                    // multiple
                                    search
                                    name="university"
                                    onChange={(e, value) => this.setState({ university: value.value })}
                                    selection
                                    options={university}
                                    placeholder="Choose your university"
                                />
                                <Form.Group widths='equal'>
                                    {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                    <Form.Input
                                        fluid label='University Seat Number'
                                        name="usn"
                                        placeholder='EX: 1PE17IS011'
                                        onChange={(e) => this.manageChange(e)}
                                    />
                                    <Form.Input
                                        fluid
                                        label='Password'
                                        name="password"
                                        placeholder='EX: password123'
                                        onChange={(e) => this.manageChange(e)}
                                    />

                                </Form.Group>
                                <Divider />
                                <Form.Field>
                                    <Checkbox toggle label="Signup as Coordinator" onClick={() => {
                                        this.setState({ coordinator: !this.state.coordinator })
                                        if (this.state.coordinator === true) {
                                            this.state.coordinator = false
                                        }
                                        else {
                                            this.state.coordinator = true
                                        }
                                    }} />
                                </Form.Field>
                                <Segment style = {{display: (this.state.coordinator)?"none": ""}}>
                                    <b>Subject details</b>
                                    <Form.Group widths='equal'>
                                        {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                        {/* <Form.Input fluid label='Subject code' placeholder='Ex: 57PES21' /> */}
                                        <Dropdown
                                            clearable
                                            fluid
                                            name="subjects"
                                            multiple
                                            search
                                            selection
                                            onChange={(e, value) => this.setState({ subjects: value.value })}
                                            options={subjects}
                                            placeholder='Subject'
                                        />
                                        {/* <Label size="big" fluid >Subject</Label> */}
                                        {/* <Form.Input fluid label='Subject Name' placeholder='EX: Automata Theory' /> */}
                                    </Form.Group>
                                    {/* <Button content='Add More Subject' icon='plus' labelPosition='left' /> */}
                                </Segment>
                                <p style={{fontWeight: "bolder", 
                                display: (this.state.status)?"":"none",
                                color: this.state.statusColor,
                                }}>{this.state.statusmsh}</p>
                                <Form.Button fluid onClick={() => this.singup()}>Submit</Form.Button>
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