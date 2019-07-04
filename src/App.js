import React from 'react';

// Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faRocket, faFan, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import images from './images.json';
import Icon from './components/icon/icon';
import Message from './components/end-game-message/Message';

library.add(faUser, faCheckSquare, faCoffee, faRocket, faFan, faTachometerAlt);

// Add clicked property to each image
const preProcessImages = () => {
  return images.map(image => {
    image.clicked = false;
    return image;
  });
}

class App extends React.Component {

  state = {
    score: 0,
    topScore: 0,
    images: preProcessImages(),
    gameOver: false,
    gameWon: false,
  }

  handleClick = async (id) => {
    if (this.state.gameOver) {
      console.log('game over')
      return
    }
    const foundIndex = this.state.images.findIndex((item) => {
      return item.id === id;
    });
    const foundItem = this.state.images[foundIndex];

    if (foundItem.clicked) {
      this.updateGameState(true);
      console.log('You lose!')

    } else {
      await this.updateClicked(true, foundIndex);
      await this.incrementScore();
      await this.shuffleImages();
      if (this.state.score === this.state.images.length) {
        this.updateGameState(true);
        await this.updateGameWon(true);
        console.log('You win!')
      }
    }
  }

  uncheckAllImages() {
    const uncheckedImages = this.state.images.map(image => {
      image.clicked = false;
      return image;
    });
    this.setState({ images: uncheckedImages })
  }

  updateClicked(clicked, index) {
    const imageArray = this.state.images;
    imageArray[index].clicked = clicked;
    this.setState({ images: imageArray })
  }

  shuffleImages = async () => {
    const array = this.state.images;
    const imageLength = array.length;

    for (let i = imageLength - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = temp;
    }
    await this.setState({ images: array })
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
    await this.shuffleImages();
    await this.uncheckAllImages()
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

  renderImageCards = () => {
    return this.state.images.map(image => {
      return (
        <Icon
          key={image.id}
          id={image.id}
          icon={image.imageUrl}
          handleClick={this.handleClick}
          clicked={image.clicked}></Icon>
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
          {this.renderImageCards()}

        </Container>

      </div>
    );
  }
}

export default App;
