import React from 'react';

// Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faRocket, faFan, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee, faAdjust, faSkiing, faHamburger } from '@fortawesome/free-solid-svg-icons'

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';

import Game from './components/Game';

// Add Fontawesome icons to library
library.add(faUser, faCheckSquare, faCoffee, faRocket, faFan, faTachometerAlt, faAdjust, faSkiing, faHamburger);

const App = () => (
  <Game />
);


export default App;
