import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./NewUser.component.css";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

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
          <InputGroup>
          <InputGroupAddon addonType="prepend">
              <InputGroupText>First Name</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="username"
              addon
              required
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Last Name</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="username"
              addon
              required
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </InputGroup>
          <br />

          <Button block size="lg" type="submit" color="success">
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserComponent;
