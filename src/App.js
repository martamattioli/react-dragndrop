import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import boardReducer from

// styles
import 'bootstrap-css-only';
import './scss/style.scss';

import Board from './components/Board';
import { observe } from './libs/Game';

// class Board extends Component {
//   render() {
//     <Provider>
//
//     </Provider>
//   }
// }


observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root')
  )
);
