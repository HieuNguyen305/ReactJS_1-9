import React from "react";

export default function ChildFNC(props) {
  console.log(props);
  return (
    <div>
      <h3>ChildFNC</h3>
      <p>Username: {props.username}</p>
    </div>
  );
}
