import React from 'react';
import Filter from './filter';
import { Grid, Segment, Card, Button, Form, Label, Divider, Table, Header, Image } from 'semantic-ui-react';
import Stdlist from './list';
// import { Http2ServerRequest } from 'http2';
import { Container, Row } from 'react-bootstrap';
import fetchData from './apicalls';

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
                            <Form.Group widths='equal'>
                                <Form.Input fluid
                                    label='Parent Name'
                                    disabled = {true}
                                    value="Name"
                                    placeholder='First name' />

                            </Form.Group>
                            <Button floated={"right"} onClick={() => this.setState({"edit": !this.state.edit})}>Edit</Button>
                            <Form.TextArea label='Address' disabled={this.state.edit} placeholder='Type Here' />
                            <Form.Group widths='equal'>
                                {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                <Form.Input fluid label='Phone Number' disabled={this.state.edit} placeholder='Ex: 7764997033' />
                                <Form.Input fluid label='New Password' disabled={this.state.edit} placeholder='EX: password123' />
                            </Form.Group>
                        </Form>
                        <Button icon="save" disabled={this.state.edit} fluid></Button>
                    </Segment>
                </Grid.Row>
            )

        }
        else if (what === "attendance") {
            return (
                <Grid.Row>
                    <Grid.Row>
                        <Segment>
                            <Card fluid>
                                <Card.Content header='89.2%' />
                                <Card.Content description={"Total Number of weeks: 31"} />
                            </Card>
                        </Segment>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: "10px" }}>
                        <Segment>
                            <Form.Select
                                fluid
                                label='Subject'
                                options={university}
                                placeholder='EX: Automata Theory'
                            />
                            <Divider></Divider>
                            <Label style={{ backgroundColor: 'green' }}>79.0%</Label>
                            <Label style={{ backgroundColor: 'lightgreen' }}>67.0%</Label>
                        </Segment>
                    </Grid.Row>
                </Grid.Row>

            )

        }
        else if (what === "iamarks") {
            return (
                <Segment>
                    <Table basic='very' celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Subject</Table.HeaderCell>
                                <Table.HeaderCell>IA-1</Table.HeaderCell>
                                <Table.HeaderCell>IA-2</Table.HeaderCell>
                                <Table.HeaderCell>IA-3</Table.HeaderCell>
                                <Table.HeaderCell>Avg. Marks</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                                        <Header.Content>
                                            Lena
              <Header.Subheader>Human Resources</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>22</Table.Cell>
                                <Table.Cell>22</Table.Cell>
                                <Table.Cell>22</Table.Cell>
                                <Table.Cell>22</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                                        <Header.Content>
                                            Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>15</Table.Cell>
                                <Table.Cell>15</Table.Cell>
                                <Table.Cell>15</Table.Cell>
                                <Table.Cell>15</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                                        <Header.Content>
                                            Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>12</Table.Cell>
                                <Table.Cell>12</Table.Cell>
                                <Table.Cell>12</Table.Cell>
                                <Table.Cell>12</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                                        <Header.Content>
                                            Mark
              <Header.Subheader>Executive</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>11</Table.Cell>
                                <Table.Cell>11</Table.Cell>
                                <Table.Cell>11</Table.Cell>
                                <Table.Cell>11</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
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
                <Segment style={{ width: "80%", marginTop: "20px", height: "95vh" }}>
                    <Grid>
                        <Grid.Column style={{ flex: 1, backgroundColor: "rgb(236, 236, 236)", height: "94.8vh" }}>
                            {/* Picture */}
                            <Grid.Row style={{ flex: 1 }}></Grid.Row>
                            <Grid.Row style={{
                                flex: 3,
                                //  backgroundColor: "pink",
                                display: "flex",
                                alignContent: 'center',
                                justifyContent: "center"
                            }}>
                                <Card
                                    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                                    header='Elliot Baker'
                                    meta='Friend'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                // extra={extra}
                                />
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
                                >Attendance</Button>
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
                                >Internal Marks</Button>
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