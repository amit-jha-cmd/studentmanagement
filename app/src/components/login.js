import React from 'react'
import { Button, Icon, Form, Segment, Checkbox, Divider } from 'semantic-ui-react'
import fetchData from './apicalls'


const api = new fetchData()

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { "isadmin": false }
        this.FormExampleForm = this.FormExampleForm.bind(this)
        this.manageChange = this.manageChange.bind(this)
        this.statusLogin = this.statusLogin.bind(this)
        this.signup = this.signup.bind(this)
    }


    manageChange = (e) => {
        this.state[e.target.name] = e.target.value
    }

    signup = () => {
        this.props.history.push("/signup")
    }
    
    statusLogin = () => {
        api.login(this.state.username,
            this.state.password,
            this.state.isadmin).then((value) => {
                console.log(value)
                if (value.status === "success") {
                    console.log(this.props)
                    this.props.history.push("/user")
                }
                else {
                    console.log("trouble login in")
                }
            })
    }

    FormExampleForm = () => {
        return (
            <div style={{
                width: "100%",
                display: "grid",
                placeItems: "center",
                height: "100vh",
                margin: 0,
                backgroundColor: "blue"
            }}>
                <h1 style={{ color: "white" }}>STUDENT MANAGEMENT SYSTEM</h1>
                <Segment style={{ width: "20%", marginTop: "-400px" }}>
                    <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                        <Icon name='student' size='massive' color='teal' />
                    </div>
                    <Form>
                        <Form.Field>
                            {/* <label>First Name</label> */}
                            <input placeholder='Username' name="username" onChange={(e) => this.manageChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            {/* <label>Last Name</label> */}
                            <input placeholder='Password' type="password" name="password" onChange={(e) => this.manageChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox toggle label="Login as admin" onClick={() => {
                                if (this.state.isadmin === true) {
                                    this.state.isadmin = false
                                }
                                else {
                                    this.state.isadmin = true
                                }
                            }} />
                        </Form.Field>
                        {/* <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field> */}
                        <Button type='submit' fluid onClick={() => this.statusLogin()}>Login</Button>
                        <Divider horizontal>Or</Divider>
                        <Button type='submit' fluid onClick={() => this.signup()}>Sign up</Button>
                    </Form>
                </Segment>
                <div style={{ position: "fixed", bottom: "0", height: "30px", width: "100%" }}>
                    <p style={{ textAlign: "center", fontWeight: "bolder" }}>Made with <Icon name="heart" />by Amit Jha</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.FormExampleForm()
        )
    }

}

export default Login