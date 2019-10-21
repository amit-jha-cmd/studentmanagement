import React from 'react';
import Filter from './filter';
import { Grid, Segment } from 'semantic-ui-react';
import DashboardChart from './dashboardchart';
import Stdlist from './list';
// import { Http2ServerRequest } from 'http2';
import { Container, Row, Col } from 'react-bootstrap';


const dashboard = (props) => {
    return (
        <Container style={{ margin: 30 }}>
            <Row>
                <Filter />
            </Row>
            <Row style={{marginTop: 30, marginLeft: 10}}>
                <Grid>
                    <Grid.Column style={{ flex: 1 }}>
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
                    </Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Stdlist name={props.name} usn={props.usn} />
                    </Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Stdlist name={props.name} usn={props.usn} />
                    </Grid.Column>
                </Grid>
            </Row>
        </Container>

    );
};

export default dashboard;



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