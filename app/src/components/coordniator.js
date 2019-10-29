import React from 'react';
import Filter from './filter';
import { Grid, Segment, Card, Button, Form, Input, Select, Table, Header, Image, Dropdown } from 'semantic-ui-react';
import Stdlist from './list';
// import { Http2ServerRequest } from 'http2';
import { Container, Row } from 'react-bootstrap';
import fetchData from './apicalls';
import PieChart, { Bar } from 'react-chartjs-2'
import Detail from './stddetail'

const university = [
    { value: "Pie", text: 'Pie Chart' },
    { value: "Bar", text: 'Bar Graph' }
]

var data = {
    datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: ['rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',]
    }],
    labels: ['Red', 'Blue', 'Purple', 'Yellow'],
};

const api = new fetchData()


class Board extends React.Component {
    constructor(props) {
        super(props)
        // this.datafromchild = this.datafromchild.bind(this)
        // this.Whichstudent = this.Whichstudent.bind(this)
        this.dashboard = this.dashboard.bind(this)
        this.whattorender = this.whattorender.bind(this)
        this.state = {
            // user: this.props.location.state.user,
            "what": "iamarks",
            "edit": true,
            "detail": {
                "address": "",
                "firstName": "",
                "lastName": "",
                "gender": "",
                "parent": "",
                "university": "",
                "dept": "",
                "usn": "",
                "coordinator": ""
            },
            "attendance": [],
            "marks": [],
            "overall": 0.0,
            "chart": "Pie"
        }
        this.handlChange = this.handlChange.bind(this)
        this.detail = this.detail.bind(this)
        this.table = this.table.bind(this)
        this.siderbar = this.siderbar.bind(this)
        this.whichChart = this.whichChart.bind(this)
        this.userList = this.userList.bind(this)
        // this.chart = this.chart.bind(this)
        this.detail()
    }

    detail = async () => {
        const call = await api.userDetails(this.state.user)
        // console.log(call.detail)
        this.setState({ "detail": call.detail })
        this.setState({ "attendance": call.attendance })
        this.setState({ "marks": call.marks })
        this.setState({ "overall": call.overall })
    }

    table = () => {
        return (
            this.state.marks.map(ia => {
                return <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Header.Content>
                                {ia.subCode}
                                <Header.Subheader>{ia.subName}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>{ia.ia1}</Table.Cell>
                    <Table.Cell>{ia.ia2}</Table.Cell>
                    <Table.Cell>{ia.ia3}</Table.Cell>
                    <Table.Cell>{ia.finalMarks}</Table.Cell>
                </Table.Row>
            })
        )
    }

    whichChart = () => {
        if (this.state.chart === "Pie") {
            return (
                <PieChart
                    data={data}
                />
            )
        }
        else if (this.state.chart === "Bar") {
            return (
                <Bar data={data} />
            )
        }
    }

    userList = () => (
        <Card.Group style={{ marginLeft: "3%" }}>
            <Card>
                <Card.Content>
                    <div style={{ width: "80px", position: "absolute", right: "0px" }}>
                        <PieChart
                            data={data}
                            // options={{ maintainAspectRatio: false }}
                            legend={false}
                        />
                    </div>
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Detail />
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <div style={{ width: "80px", position: "absolute", right: "0px" }}>
                        <PieChart
                            data={data}
                            // options={{ maintainAspectRatio: false }}
                            legend={false}
                        />
                    </div>
                    <Card.Header>Molly Thomas</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                        Molly wants to add you to the group <strong>musicians</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Detail />
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <div style={{ width: "80px", position: "absolute", right: "0px" }}>
                        <PieChart
                            data={data}
                            // options={{ maintainAspectRatio: false }}
                            legend={false}
                        />
                    </div>
                    <Card.Header>Jenny Lawrence</Card.Header>
                    <Card.Meta>New User</Card.Meta>
                    <Card.Description>
                        Jenny requested permission to view your contact details
              </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Detail />
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    )


    whattorender(what) {
        if (what === "setting") {
            return (
                <Grid.Row style={{ flex: 1 }}>
                    <Segment>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input fluid
                                    label='Parent Name'
                                    disabled={true}
                                    value="Name"
                                    placeholder='First name' />

                            </Form.Group>
                            <Button floated={"right"} onClick={() => this.setState({ "edit": !this.state.edit })}>Edit</Button>
                            <Form.TextArea
                                label='Address'
                                disabled={this.state.edit}
                                placeholder='Type Here'
                                // onChange={(e, value)=> this.setState({"address": value})} 
                                value={this.state.detail.address}
                            />
                            <Form.Group widths='equal'>
                                {/* <Form.Input fluid label='First name' placeholder='dept' /> */}
                                <Form.Input
                                    fluid
                                    label='Phone Number'
                                    disabled={this.state.edit}
                                    placeholder='Ex: 7764997033'
                                // value={this.state.detail.}
                                />
                                <Form.Input
                                    fluid
                                    label='New Password'
                                    name="address"

                                    disabled={this.state.edit}
                                    placeholder='EX: password123'
                                />
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
                    <Grid.Row >
                        <Segment>
                            <Form.Select
                                fluid
                                name="dept"
                                onChange={(e, value) => this.setState({ chart: value.value })}
                                label='Graphs'
                                defaultValue={university[0].value}
                                options={university}
                                placeholder='EX: ISE'
                            />
                            {/* <Card fluid>
                                <Card.Content header={(this.state.overall * 100).toFixed(2) + "\%"} />
                                <Card.Content description={"Number of Weeks: " + this.state.attendance.length} />
                            </Card> */}
                        </Segment>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: "10px" }}>
                        <Segment>
                            {this.whichChart()}
                            {/* <Card fluid>
                                <Card.Content header={(this.state.overall * 100).toFixed(2) + "\%"} />
                                <Card.Content description={"Number of Weeks: " + this.state.attendance.length} />
                            </Card> */}
                        </Segment>
                    </Grid.Row>
                    {/* <Grid.Row style={{ marginTop: "10px" }}>
                        <Segment>
                            <h2>Attendance</h2>
                            <Divider></Divider>
                            <Form.Select
                                fluid
                                label='Subject'
                                options={university}
                                placeholder='EX: Automata Theory'
                            />
                            <Divider></Divider>
                            <Label as="a" image>1 <Label.Detail>79%</Label.Detail></Label>
                            {
                                this.state.attendance.map(week => {
                                    return <Label as="a" image>{week.weekno} <Label.Detail>{week.percent + "\%"}</Label.Detail></Label>
                                })
                            }
                            <Label style={{ backgroundColor: 'lightgreen' }}>67.0%</Label>
                        </Segment>
                    </Grid.Row> */}
                </Grid.Row>

            )

        }
        else if (what === "iamarks") {
            return (
                <Grid.Row>
                    <Grid.Row >
                        <Segment>
                            <Dropdown
                                name="dept"
                                onChange={(e, value) => this.setState({ chart: value.value })}
                                fluid
                                search
                                selection
                                defaultValue={university[0].value}
                                options={university}
                                placeholder='EX: ISE'
                            />
                            {/* <Card fluid>
                                <Card.Content header={(this.state.overall * 100).toFixed(2) + "\%"} />
                                <Card.Content description={"Number of Weeks: " + this.state.attendance.length} />
                            </Card> */}
                        </Segment>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: "10px" }}>
                        <Segment style={{ height: "80vh", overflowY: "auto" }}>
                            {this.userList()}
                            {/* <Card fluid>
                                <Card.Content header={(this.state.overall * 100).toFixed(2) + "\%"} />
                                <Card.Content description={"Number of Weeks: " + this.state.attendance.length} />
                            </Card> */}
                        </Segment>
                    </Grid.Row>
                </Grid.Row>

            )
        }
        else {
            return (
                <h1>Hey there</h1>
            )
        }
    }

    siderbar = () => {
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
                                    header={this.state.detail.firstName + " " + this.state.detail.lastName}
                                    meta={this.state.detail.usn}
                                // description={this.state.detail.dept}
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
                                >Dashboard</Button>
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
                                >Student Profiles</Button>
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

    handlChange = (e) => { this.setState["what"] = "setting" }
    dashboard() {
        return (
            this.siderbar()

        )

    }

    render() {
        return (
            this.dashboard()
        )
    }
}

export default Board;