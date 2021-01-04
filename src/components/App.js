import React, { Component } from "react";
import NewUserComponent from "./NewUser.component";
import UserList from "./UserList.component";
import { connect } from "react-redux";
import "./App.css";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from "../actions/users.action";
import { Alert } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  handleCreateUserSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName,
    });
  };

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError({
      error: "",
    });
  };

  render() {
    const users = this.props.users;
    return (
      <div className="the-cord">
        <div className="the-form">
          <Jumbotron fluid>
            <Container fluid>
              <h2 className="display-3">React Redux Saga CRUD</h2>
              <p className="lead">
                Create, Read, Update and Delete using Redux-Saga, ReactJS, REM
                API, AXIOS, BS and React-Strap
              </p>
            </Container>
          </Jumbotron>

          {/* Alert Saga Component */}
          <Alert
            color="danger"
            size="sm"
            isOpen={!!this.props.users.error}
            toggle={this.handleCloseAlert}
          >
            {this.props.users.error}
          </Alert>
        </div>

        <div className="the-list">
          <NewUserComponent onSubmit={this.handleCreateUserSubmit} />
          {!!users.items && !!users.items.length && (
            <UserList
              onDeleteUserClick={this.handleDeleteUserClick}
              users={users.items}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
})(App);
