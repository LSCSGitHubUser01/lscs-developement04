import React from "react";
import { Button, Form, Input, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class MyComponent extends React.Component {
  render() {
    return (
<div class="content">
  <div class="ui main container">
    <div class="ui grid">
    <div class="ui form six wide column centered">
    <div class="one field">
<form class = "ui form" action = "">
  <div class="three wide field">
        <Form.Field>
          <label htmlFor="name">Name</label>
          <Input name="name" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <Input name="email" />
        </Form.Field>
        <Button primary>Submit</Button>
     </div> 
      </form>
  
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default MyComponent;