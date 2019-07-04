import React from 'react';

// Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faRocket, faFan, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

import images from './images.json';
import Icon from './components/icon/icon';


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
  }

  updateGameState(state) {
    this.setState({ gameOver: state })
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
        console.log('You win!')
      }
    }
    console.log(this.state.images)
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
    await this.shuffleImages();
    await this.uncheckAllImages()
    await this.setTopScore();
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

        <header className="App-header">
        <h1>Clicky Game</h1>
          <div id='score'>Score: {this.state.score} | Top Score: {this.state.topScore}</div>
          <Button variant="success" onClick={this.handleResetGame}>Reset Game</Button>
        </header>

        {this.renderImageCards()}
      </div>
    );
  }
}

export default App;
