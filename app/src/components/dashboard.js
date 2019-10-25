import React from 'react';
import Filter from './filter';
import { Grid } from 'semantic-ui-react';
import Stdlist from './list';
// import { Http2ServerRequest } from 'http2';
import { Container, Row } from 'react-bootstrap';
import fetchData from './apicalls';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.datafromchild = this.datafromchild.bind(this)
        this.Whichstudent = this.Whichstudent.bind(this)
        this.dashboard = this.dashboard.bind(this)
        this.state = {}
    }

    datafromchild = (data) => {
        // console.log(data['data'].length)
        this.setState({"some":data['data']['0'], "length": data['data'].length})
        // console.log(this.state)
    }

    Whichstudent = (props) => {
        console.log(this.state.length)
        if (this.state.length === 1) {
            return (
                <Grid.Column style={{ flex: 1 }}>
                    <Stdlist name={this.state.some.name} usn={this.state.some.usn} />
                </Grid.Column>
            )
        }
        return (
            <Grid.Column style={{ flex: 1 }}>
                {/* <Stdlist name={this.state.name} usn={this.state.usn} /> */}
                {console.log("null part")}
            </Grid.Column>
        )

    }


    dashboard = (props) => {
        return (
            <Container style={{ margin: 30 }}>
                <Row>
                    <Filter callback={this.datafromchild} />
                </Row>
                <Row style={{ marginTop: 30, marginLeft: 30 }}>
                    <Grid>
                        {/* <Grid.Column style={{ flex: 1 }}>
                            <Stdlist name={this.state.name} usn={this.state.usn} />
                        </Grid.Column> */}
                        <this.Whichstudent />
                        {/* <Grid.Column style={{ flex: 1 }}>
                            <Stdlist name={props.name} usn={props.usn} />
                        </Grid.Column>
                        <Grid.Column style={{ flex: 1 }}>
                            <Stdlist name={props.name} usn={props.usn} />
                        </Grid.Column>
                        <Grid.Column style={{ flex: 1 }}>
                            <Stdlist name={props.name} usn={props.usn} />
                        </Grid.Column>
                        <Grid.Column style={{ flex: 1 }}>
                            <Stdlist name={props.name} usn={props.usn} />
                        </Grid.Column> */}
                    </Grid>
                </Row>
            </Container>

        );
    };

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