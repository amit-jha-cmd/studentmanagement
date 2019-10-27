import React from 'react';
import Filter from './filter';
import { Grid, Segment, Card, Button, Form, Input, Select } from 'semantic-ui-react';
import Stdlist from './list';
// import { Http2ServerRequest } from 'http2';
import { Container, Row } from 'react-bootstrap';
import fetchData from './apicalls';
import Student from './finalmarkstable'

const university = [
    { key: 'pes', value: "pesu", text: 'PESIT' },
    { key: 'xyz', value: "xyz", text: 'XYZ' }
]

class Board extends React.Component {
    constructor(props) {
        super(props)
        // this.datafromchild = this.datafromchild.bind(this)
        // this.Whichstudent = this.Whichstudent.bind(this)
        this.dashboard = this.dashboard.bind(this)
        this.whattorender = this.whattorender.bind(this)
        this.state = { "what": "iamarks", "edit": true }
        this.handlChange = this.handlChange.bind(this)
    }

    whattorender(what) {
        if (what === "setting") {
            return (
                <Grid.Row style={{ flex: 1 }}>
                    <Segment>
                        <Form>
                            <Input type='text' placeholder='Search...' action fluid>
                                <input />
                                <Select compact options={university} defaultValue='pesu' />
                                <Button type='submit'>Search</Button>
                            </Input>
                        </Form>
                    </Segment>
                </Grid.Row>
            )

        }
        else if (what === "attendance") {
            return (
                <Grid>
                    <Grid.Column style={{ flex: 1 }}>
                        <Student />
                    </Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Student />
                    </Grid.Column>
                </Grid>
            )

        }
        else if (what === "iamarks") {
            return (
                <Grid>
                    <Grid.Column style={{ flex: 1 }}>
                        <Student />
                    </Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Student />
                    </Grid.Column>
                </Grid>
            )
        }
        else {
            return (
                <h1>Hey there</h1>
            )
        }
    }

    handlChange = (e) => { this.setState["what"] = "setting" }
    dashboard() {
        return (
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                <Segment style={{ width: "80%", marginTop: "20px", height: "95vh", overflowY: "auto" }}>
                    <Grid>
                        <Grid.Column style={{ flex: 1, position: 'sticky', backgroundColor: "rgb(236, 236, 236)", height: "94.8vh" }}>
                            {/* Picture */}
                            <Grid.Row style={{ flex: 1 }}></Grid.Row>
                            <Grid.Row style={{
                                flex: 3,
                                //  backgroundColor: "pink",
                                display: "flex",
                                alignContent: 'center',
                                justifyContent: "center"
                            }}>
                            </Grid.Row>
                            <Grid.Row style={{
                                flex: 1,
                                display: "flex",
                                alignContent: 'center',
                                justifyContent: "center",
                                marginTop: "10px"
                            }}>
                                <Button
                                    size='large'
                                    fluid
                                    onClick={() => this.setState({ "what": "attendance" })}
                                >Student</Button>
                            </Grid.Row>
                            <Grid.Row style={{
                                flex: 1,
                                display: "flex",
                                alignContent: 'center',
                                justifyContent: "center",
                                marginTop: "10px"
                            }}>
                                <Button
                                    size='large'
                                    fluid
                                    onClick={() => this.setState({ "what": "iamarks" })}
                                >Class coordinator</Button>
                            </Grid.Row>
                            <Grid.Row style={{
                                flex: 1,
                                display: "flex",
                                alignContent: 'center',
                                justifyContent: "center",
                                marginTop: "10px"
                            }}>
                                <Button
                                    size='large'
                                    color="green"
                                    icon="setting"
                                    fluid
                                    onClick={() => { this.setState({ "what": "setting" }); console.log(this.state) }}
                                ></Button>
                            </Grid.Row>
                            <Grid.Row style={{
                                flex: 1,
                                display: "flex",
                                alignContent: 'center',
                                justifyContent: "center",
                                marginTop: "10px"
                            }}>
                                <Button
                                    size='large'
                                    color="red"
                                    icon="log out"
                                    fluid
                                    onClick={() => this.props.history.goBack()}
                                ></Button>
                            </Grid.Row>
                        </Grid.Column>
                        {/* Detail tab */}
                        <Grid.Column style={{ flex: 3 }}>
                            {this.whattorender(this.state.what)}
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>

        )

    }

    render() {
        return (
            this.dashboard()
        )
    }
}



export default Board;



// {/* <Grid>
//             {/* <Grid.Row>
//                 <Grid.Column stretched width={5}>
//                     <Segment>
//                         <DashboardChart whatchart="pie" />
//                     </Segment>
//                 </Grid.Column>
//                 <Grid.Column stretched width={11}>
//                     <Segment>
//                         <DashboardChart whatchart="dashboard" />
//                     </Segment>
//                 </Grid.Column>
//             </Grid.Row> */}
//             <Grid.Row>
//                 <Segment className="filter">
//                     <Filter />
//                 </Segment>
//             </Grid.Row>
//             <Grid.Row>
//                 <h1>Please make proper queries</h1>
//             </Grid.Row>
//             <Grid.Row>
//                 <Stdlist name={props.name} usn={props.usn}/>
//             </Grid.Row>
//         </Grid> */}