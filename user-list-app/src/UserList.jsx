import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
};

export default UserList;
