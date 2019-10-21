import React, { Component } from 'react'
import { Grid, Menu, List} from 'semantic-ui-react';
import Student from './list';
import Timeline from './dashboard';
import About from './about';
import Studentinfo from "./studentlist"



export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'Dashboard' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    const Stdinfo = (props)=> (
      <List items={[
      <Student id="Amit Jha" usn="1PE17IS011" />,
       <Student id="Aman Mittal" usn="1PE17IS010"/>
      ]} />
    );

    function Whattorender(props) {
      console.log(props.whatstate);
      if(props.whatstate === 'Student Information'){
        return <Studentinfo />
      }
      else if(props.whatstate === 'Dashboard'){
        return <Timeline name="Abhya" usn="1PE17IS011"/>
      }
      else if(props.whatstate === "About"){
        return <About />;
      }
    }
    return (
      <Grid>
          <div className='navbar'>
            <Grid.Row stretched width={16}>
            <Menu fluid horizontal tabular>
                <Menu.Item
                name='Dashboard'
                active={activeItem === 'Dashboard'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Student Information'
                active={activeItem === 'Student Information'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='About'
                active={activeItem === 'About'}
                onClick={this.handleItemClick}
                />
            </Menu>
            </Grid.Row>
          </div>
            <Grid.Column stretched width={16}>
              <div className="cards">
                <Whattorender whatstate={activeItem} />
              </div>
            </Grid.Column>
       
      </Grid>
    )
  }
}