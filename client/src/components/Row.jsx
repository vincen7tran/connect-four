import React from 'react';
import Square from './Square.jsx';

const Row = props => {
  const renderedSquares = [];
  
  for (let i = 0; i < 7; i++) {
    renderedSquares.push(<Square key={`${props.y}${i}`} x={i} y={props.y} />);
  }

  return (
    <div className="squaregrid">
      {renderedSquares}
    </div>
  );
}

export default Row;