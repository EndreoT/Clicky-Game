import React from 'react';

// Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faRocket, faFan, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import icons from './icons.json';
import Icon from './components/icon/Icon';
import Message from './components/end-game-message/Message';

library.add(faUser, faCheckSquare, faCoffee, faRocket, faFan, faTachometerAlt);

// Add clicked property to each icon
const preProcessIconJSON = () => {
  return icons.map(icon => {
    icon.clicked = false;
    return icon;
  });
}

class App extends React.Component {

  state = {
    score: 0,
    topScore: 0,
    icons: preProcessIconJSON(),
    gameOver: false,
    gameWon: false,
  }

  handleClick = async (id) => {
    if (this.state.gameOver) {
      console.log('game over')
      return
    }
    const foundIndex = this.state.icons.findIndex((item) => {
      return item.id === id;
    });
    const foundItem = this.state.icons[foundIndex];

    if (foundItem.clicked) {
      this.updateGameState(true);
      console.log('You lose!')

    } else {
      await this.updateClicked(true, foundIndex);
      await this.incrementScore();
      await this.shuffleIcons();
      if (this.state.score === this.state.icons.length) {
        this.updateGameState(true);
        await this.updateGameWon(true);
        console.log('You win!')
      }
    }
  }

  uncheckAllIcons() {
    const uncheckedIcons = this.state.icons.map(icon => {
      icon.clicked = false;
      return icon;
    });
    this.setState({ icons: uncheckedIcons })
  }

  updateClicked(clicked, index) {
    const IconArray = this.state.icons;
    IconArray[index].clicked = clicked;
    this.setState({ icons: IconArray })
  }

  shuffleIcons = async () => {
    const array = this.state.icons;
    const arrayLength = array.length;

    for (let i = arrayLength - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = temp;
    }
    await this.setState({ icons: array })
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 })
  }

  resetScore = () => {
    this.setState({ score: 0 })
  }

  setTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    this.resetScore();
  }

  handleResetGame = async () => {
    console.log('reset')
    await this.updateGameState(false);
    await this.updateGameWon(true)
    await this.shuffleIcons();
    await this.uncheckAllIcons()
    await this.setTopScore();
  }

  updateGameState(state) {
    this.setState({ gameOver: state })
  }

  updateGameWon = (won) => {
    this.setState({ gameWon: won })
  }

  isGameWon = () => {
    return this.state.gameOver && this.state.gameWon;
  }

  determineVariant = () => {
    if (this.isGameWon()) {
      return 'success'
    }
    return 'danger';
  }

  determineMessage = () => {
    if (this.isGameWon()) {
      return 'You Win!'
    }
    return 'You Lose!'
  }

  renderIconCards = () => {
    return this.state.icons.map(icon => {
      return (
        <Icon
          key={icon.id}
          id={icon.id}
          icon={icon.faviconName}
          handleClick={this.handleClick}
          clicked={icon.clicked}>
        </Icon>
      );
    })
  }

  render() {
    return (
      <div className="App">

        <Container>
          <header className="App-header">
            <h1>Clicky Game</h1>
            <div id='score'>Score: {this.state.score} | Top Score: {this.state.topScore}</div>
            <Button variant="success" onClick={this.handleResetGame}>Reset Game</Button>
          </header>
        </Container>

        {/* Game over message */}
        <Message show={this.state.gameOver} variant={this.determineVariant()} message={this.determineMessage()}></Message>

        <Container>
          {/* Icons */}
          {this.renderIconCards()}

        </Container>

      </div>
    );
  }
}

export default App;
