import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setError } from "../../reducers/postsReducer";

const ErrorAlert = ({ message }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  function onCloseHandler() {
    setShow(false);
    dispatch(setError(""));
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={onCloseHandler} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }

  return <></>;
};

export default ErrorAlert;
