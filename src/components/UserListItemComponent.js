import React from "react";
import { Button } from "reactstrap";

const UserListItemComponent = ({ user, onDeleteClick }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          margin: "auto 0",
          textAlign: "center",
          height: "2.5em",
          width: "2.5em",
          lineHeight: "40px",
          borderRadius: "50%",
          color: "#fff",
          fontWeight: "bold",
          background: "darkred",
          border: "solid 2px #555",
        }}
      >
        {!!user && !!user.firstName && !!user.lastName
          ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
          : ""}
      </div>

      <div style={{ margin: "auto 0", flexGrow: 1, paddingLeft: "10px" }}>
        {user.firstName} {user.lastName}
      </div>

      <div style={{ margin: "auto 0" }}>
        <Button
          size="sm"
          color="danger"
          outline
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserListItemComponent;
