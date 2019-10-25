import React from 'react'
import { Header, Table } from 'semantic-ui-react'

const TableExampleCollapsing = () => (
    <Table
        // basic='very'
        style={{ width: "100%" }}
        celled collapsing
    >
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Subject</Table.HeaderCell>
                <Table.HeaderCell>Average Marks</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Header.Content>
                            17CS57
              <Header.Subheader>Automata Theory</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>22</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Header.Content>
                            17CS57
              <Header.Subheader>Automata Theory</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>22</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Header.Content>
                            17CS57
              <Header.Subheader>Automata Theory</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>22</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Header.Content>
                            17CS57
              <Header.Subheader>Automata Theory</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>22</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export default TableExampleCollapsing