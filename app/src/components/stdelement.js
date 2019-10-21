import React from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import {Chart} from 'react-google-charts';

const item = (props) => (
    <Segment>
        <Grid>
            <Grid.Column stretched>
                <Chart
                    width={''}
                    height={'270px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'Attendence'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]}
                    options={{
                        hAxis: {
                        title: 'Week',
                        },
                        vAxis: {
                        title: 'Attendance',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                </Grid.Column>
        </Grid>
    </Segment>
);

export default item;