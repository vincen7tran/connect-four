import React from 'react';

const Square = props => {
  return (
    <div className={`col${props.x}`}>
        {props.y} 
        {props.x}
    </div>
  )
}

export default Square;