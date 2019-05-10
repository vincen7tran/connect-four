import React from 'react';
import Row from './Row.jsx';

class App extends React.Component {
  state = {
    playerOneTurn: true,
    playerOneWins: 0,
    playerTwoWins: 0,
    '60': '', '61': '', '62': '', '63': '', '64': '', '65': '', '66': '',
    '50': '', '51': '', '52': '', '53': '', '54': '', '55': '', '56': '',
    '40': '', '41': '', '42': '', '43': '', '44': '', '45': '', '46': '',
    '30': '', '31': '', '32': '', '33': '', '34': '', '35': '', '36': '',
    '20': '', '21': '', '22': '', '23': '', '24': '', '25': '', '26': '',
    '10': '', '11': '', '12': '', '13': '', '14': '', '15': '', '16': '',
  }

  handleClick = (e) => {
    let id = e.target.id;
    this.gravity(id);
  }

  gravity = (id) => {
    // let numID = parseInt(id);

    // while (numID > numID % 10 + 10) {
    //   if (this.state[numID - 10] !== '') break;
    //   numID = numID - 10;
    // }
    let numID = parseInt(id) % 10 + 10;
    while (numID < 67) {
      if (this.state[numID] === '') break;
      numID += 10;
    }

    if (numID > 66) alert('Column Full!');
    else this.markSpace(document.getElementById(`${numID}`));
  }

  markSpace = (square) => {
    if (this.state.playerOneTurn) {
      square.style.backgroundColor = 'red';
    } else {
      square.style.backgroundColor = 'black' ;
    }
    this.setState({[square.id]: this.state.playerOneTurn, playerOneTurn: !this.state.playerOneTurn},
      () => {
        this.checkRows();
        this.checkColumns();
      });
  }

  checkRows = () => {
    let playerOne = 0;
    let playerTwo = 0;
    for (let i = 10; i < 70; i += 10) {
      for (let j = 0; j < 7; j++) {
        if (this.state[i+j] === true) {
          playerOne++;
          playerTwo = 0;
        } else if (this.state[i+j] === false) {
          playerTwo++;
          playerOne = 0;
        } else {
          playerOne = 0;
          playerTwo = 0;
        }
        if (playerOne === 4) {
          return this.victory(0);
        }
        if (playerTwo === 4) {
          return this.victory(1);
        }
      }
    }
  }

  checkColumns = () => {
    let playerOne = 0;
    let playerTwo = 0;
    for (let i = 0; i < 7; i++) {
      for (let j = 10; j < 70; j += 10) {
        if (this.state[i+j] === true) {
          playerOne++;
          playerTwo = 0;
        } else if (this.state[i+j] === false) {
          playerTwo++;
          playerOne = 0;
        } else {
          playerOne = 0;
          playerTwo = 0;
        }
        if (playerOne === 4) {
          return this.victory(0);
        }
        if (playerTwo === 4) {
          return this.victory(1);
        }
      }
    }
  }

  victory = (status) => {
   if (status) {
     console.log('Black Wins!');
     this.setState({playerTwoWins: ++this.state.playerTwoWins});
   } else {
    console.log('Red Wins!');
    this.setState({playerOneWins: ++this.state.playerOneWins});
   }
  }

  render() {
   const renderedRows = [];
   
   for (let i = 6; i >= 1; i--) {
     renderedRows.push(<Row key={i} y={i} handleClick={this.handleClick} />);
   }

    return (
      <div>
        <div>
          {renderedRows}
        </div>
        <div>
          {`Player One Wins: ${this.state.playerOneWins}`}
        </div>
        <div>
          {`Player Two Wins: ${this.state.playerTwoWins}`}
        </div>
      </div>
    );
  }
}

export default App;

