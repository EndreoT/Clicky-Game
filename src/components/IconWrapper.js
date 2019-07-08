import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const IconWrapper = (props) => (
    <Container style={{ 'overflow': true }}>
      <Jumbotron >
        {/* Icons */}
        {props.renderIconCards()}
      </Jumbotron>
    </Container>
  );

export default IconWrapper;
