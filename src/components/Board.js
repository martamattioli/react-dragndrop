import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import PropTypes from 'prop-types';

import BoardSquare from './BoardSquare';
import Knight from './Knight';

import { canMoveKnight, moveKnight } from '../libs/Game';


class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i}
        className="square-wrapper"
      >
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) return <Knight />;
  }

  render() {
    let squares = [];
    for (var i = 0; i < 64; i++) {
      squares = squares.concat(this.renderSquare(i));
    }

    return (
      <div className="board">
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

export default DragDropContext(HTML5Backend)(Board);
