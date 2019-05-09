import React from 'react';
import Row from './Row.jsx';

class App extends React.Component {
  state = {
    playerOneTurn: true,
    '60': '', '61': '', '62': '', '63': '', '64': '', '65': '', '66': '',
    '50': '', '51': '', '52': '', '53': '', '54': '', '55': '', '56': '',
    '40': '', '41': '', '42': '', '43': '', '44': '', '45': '', '46': '',
    '30': '', '31': '', '32': '', '33': '', '34': '', '35': '', '36': '',
    '20': '', '21': '', '22': '', '23': '', '24': '', '25': '', '26': '',
    '10': '', '11': '', '12': '', '13': '', '14': '', '15': '', '16': '',
  }

  handleClick = (e) => {
    let id = e.target.id;
    let square = this.gravity(id);
    this.markSpace(square);
  }

  gravity = (id) => {
    let numID = parseInt(id);
    
    while (numID > numID % 10 + 10) {
      if (this.state[numID - 10] !== '') break;
      numID = numID - 10;
    }
    let square = document.getElementById(`${numID}`);

    return square;
  }

  markSpace = (square) => {
    if (this.state.playerOneTurn) {
      square.style.backgroundColor = 'red';
    } else {
      square.style.backgroundColor = 'black' ;
    }
    this.setState({[square.id]: this.state.playerOneTurn, playerOneTurn: !this.state.playerOneTurn});
  }

  render() {
   const renderedRows = [];
   
   for (let i = 6; i >= 1; i--) {
     renderedRows.push(<Row key={i} y={i} handleClick={this.handleClick} />);
   }

    return (
      <div>
        {renderedRows}
      </div>
    );
  }
}

export default App;

