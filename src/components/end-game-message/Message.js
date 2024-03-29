import React from 'react';

import Alert from 'react-bootstrap/Alert';


const Message = (props) => {
  return (
    <div>
      <Alert
        style={{ textAlign: 'center' }}
        variant={props.variant}
        show={props.show}>
        {props.message}
      </Alert>
    </div>
  );
}

export default Message;