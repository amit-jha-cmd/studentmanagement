import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Markscard from './markscard';

export default class AccordionExampleStyled extends Component {
    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion styled style={{marginBottom: 10}}>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Amit Jha | 1PE17IS011
        </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <div>
                        <Markscard />
                    </div>
                </Accordion.Content>
            </Accordion>
        )
    }
}