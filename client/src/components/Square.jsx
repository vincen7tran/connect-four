import React from 'react';

const Square = props => {
  return (
    <div id={`${props.y}${props.x}`} className={`col${props.x}`} onClick={props.handleClick}>
        {props.y} 
        {props.x}
    </div>
  )
}

export default Square;