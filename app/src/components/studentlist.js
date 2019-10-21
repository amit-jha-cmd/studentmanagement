import React, { Component } from 'react'
import { Grid, Menu, List, Segment, Button } from 'semantic-ui-react';
import Student from './list';
import Finalmarks from './finalmarkstable'

const Studentlist = () => {
    return (
        <Segment style={{ margin: 30 }}>
            <Grid>
                <Grid.Row style={{ margin: 20 }}>
                    <Grid.Column style={{ flex: 1 }}></Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Button style={{ width: "100%" }}>Generate Internal Marks</Button>
                    </Grid.Column>
                    <Grid.Column style={{ flex: 1 }}></Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ flex: 1 }}>
                    <Grid.Column style={{ flex: 1 }}>
                        <Finalmarks />
                    </Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Finalmarks />
                    </Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Finalmarks />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Studentlist;