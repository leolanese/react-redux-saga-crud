import React from "react";
import UserListItemComponent from "./UserListItem.component";
import { ListGroup, ListGroupItem } from "reactstrap";

const UserListComponent = ({ users, onDeleteUserClick }) => {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          }
          return 0;
        })
        .map((user) => {
          return (
            <ListGroupItem key={user.id}>
                <UserListItemComponent onDeleteClick={onDeleteUserClick} user={user} />
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};

export default UserListComponent;
