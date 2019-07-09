import React from 'react';

// Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faRocket, faFan, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee, faAdjust, faSkiing, faHamburger } from '@fortawesome/free-solid-svg-icons'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';

import icons from './icon/icons.json';
import Icon from './icon/Icon';
import IconWrapper from './IconWrapper'
import Message from './end-game-message/Message';
import Nav from './Nav'

library.add(faUser, faCheckSquare, faCoffee, faRocket, faFan, faTachometerAlt, faAdjust, faSkiing, faHamburger);

// Add clicked property to each icon
const preProcessIconJSON = () => {
  return icons.map(icon => {
    icon.clicked = false;
    return icon;
  });
}

class Game extends React.Component {

  state = {
    score: 0,
    topScore: 0,
    icons: preProcessIconJSON(),
    gameOver: false,
    gameWon: false,
  }

  // Main event handler on icon click
  handleClick = async (id) => {
    // Check if game over. Prevent icon click if true
    if (this.state.gameOver) {
      return
    }
    // Linear seach to find clicked item
    const foundIndex = this.state.icons.findIndex(item => {
      return item.id === id;
    });
    const foundItem = this.state.icons[foundIndex];

    if (foundItem.clicked) { // Icon has already been clicked. Game over -> Loss
      await this.updateGameState(true);
    } else {
      await this.updateClicked(true, foundIndex);
      await this.incrementScore();
      await this.shuffleIcons();
      if (this.state.score === this.state.icons.length) { // All icons have been clicked only once. Game over -> Win
        await this.updateGameState(true);
        await this.updateGameWon(true);
      }
    }
  }

  // Set clicked property to false for all icons
  uncheckAllIcons() {
    const uncheckedIcons = this.state.icons.map(icon => {
      icon.clicked = false;
      return icon;
    });
    this.setState({ icons: uncheckedIcons })
  }

  // Update clicked property for icon
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

  incrementScore = async () => {
    await this.setState({ score: this.state.score + 1 })
    await this.setTopScore();
  }

  resetScore = () => {
    this.setState({ score: 0 })
  }

  setTopScore = async () => {
    if (this.state.score > this.state.topScore) {
      await this.setState({ topScore: this.state.score });
    }
  }

  handleResetGame = async () => {
    await this.updateGameState(false);
    await this.updateGameWon(false);
    await this.resetScore();
    await this.shuffleIcons();
    await this.uncheckAllIcons()
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
      return 'success';
    }
    return 'danger';
  }

  determineMessage = () => {
    if (this.isGameWon()) {
      return 'You Win!';
    }
    return 'You Lose!';
  }

  renderIconCards = () => {
    return this.state.icons.map(icon =>  (
        <Icon
          key={icon.id}
          id={icon.id}
          icon={icon.faviconName}
          handleClick={this.handleClick}
          clicked={icon.clicked}>
        </Icon>
      )
    );
  }

  render() {
    return (
      <div className="App" style={{ overflow: true }}>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          handleResetGame={this.handleResetGame}
        />

        {/* Game over message */}
        <Message
          show={this.state.gameOver}
          variant={this.determineVariant()}
          message={this.determineMessage()}>
        </Message>

        {/* Icons */}
        <IconWrapper renderIconCards={this.renderIconCards} />
      </div>
    );
  }
}

export default Game;
