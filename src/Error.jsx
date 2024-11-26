import React from "react";
import { Alert } from "react-bootstrap";

const Error = (props) => {
  return (
    <>
      <Alert variant="danger">{props.children}</Alert>
    </>
  );
};

export default Error;
