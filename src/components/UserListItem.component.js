import React from "react";
import { Button } from "reactstrap";
import "./UserLIstItem.component.css";

const UserListItemComponent = ({ user, onDeleteClick }) => {
  return (
    <div className="row">
      <div className="column">{user.firstName}</div>
      <div className="column">{user.lastName}</div>
      <div className="column column-right">
      <Button
          size="lg"
          color="warning"
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
