import React from "react";
import { Button } from "reactstrap";
import "./UserLIstItemComponent.css";

const UserListItemComponent = ({ user, onDeleteClick }) => {
  return (
    <div className="row">
      <div className="column">{user.firstName}</div>
      <div className="column">{user.lastName}</div>
      <div className="column column-right">
      <Button
          size="lg"
          color="danger"
          block
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserListItemComponent;
