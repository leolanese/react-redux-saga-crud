import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./NewUserComponent.css"

class NewUserComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = this.state;

    this.props.onSubmit({
      firstName,
      lastName,
    });

    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.currentTarget.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.currentTarget.value,
    });
  };

  render() {
    return (
      //  extending from React Strap
      <Form onSubmit={this.handleSubmit} className="the-list-form">
        {/* extending from React Strap */}
        <FormGroup>
          <Label>First name</Label>
          <Input
            required
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input
            required
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Button block type="submit" color="success">
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserComponent;
