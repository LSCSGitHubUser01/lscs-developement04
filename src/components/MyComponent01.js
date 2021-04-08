import React from "react";
import { Button, Form, Input, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from 'react-router-dom'

class MyComponent01 extends React.Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
      const { activeItem } = this.state
    return (
<div class="content">

 <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='photos'
            active={activeItem === 'photos'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='music'
            active={activeItem === 'music'}
            onClick={this.handleItemClick}
          />      
          <Menu.Item
            name='video'
            active={activeItem === 'video'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='writings'
            active={activeItem === 'writings'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>    
      
      </div>

    );
  }
}

export default MyComponent01;