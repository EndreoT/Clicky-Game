import React from 'react';
import Alert from 'react-bootstrap/Alert'


function Message(props) {
  return (
    <div>
      <Alert variant={props.variant} show={props.show}>
        {props.message}
      </Alert>
    </div>
  );
}

export default Message;