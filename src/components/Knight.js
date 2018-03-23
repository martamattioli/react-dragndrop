import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ItemTypes } from '../libs/Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    console.log({props});
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends Component {
  componentDidMount() {
    const img = new Image();
    img.src = 'http://icons.veryicon.com/png/Emoticon/Vista%20Chess%20Emoticons/Knight%20Chess.png';
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        className="knight"
        style={{
          opacity: isDragging ? 0.5 : 1
        }}>♘</div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
