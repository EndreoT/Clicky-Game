import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const styles = {
  textAlign: 'center',
  backgroundColor: '#e9ecef'
}

function Nav(props) {
  return (
    <Container fluid='true' style={styles}>
      <h1 >Clicky Game</h1>
      <div id='score'>Score: {props.score} | Top Score: {props.topScore}</div>
      <Button
        variant="success"
        onClick={() => props.handleResetGame()}>
        Reset Game
      </Button>
    </Container>
  )
}

export default Nav