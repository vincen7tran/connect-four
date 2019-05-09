import React from 'react';
import Row from './Row.jsx';

class App extends React.Component {
  state = {
    playerOneTurn: true,
    board: {
      '50': '', '51': '', '52': '', '53': '', '54': '', '55': '', '56': '',
      '40': '', '41': '', '42': '', '43': '', '34': '', '45': '', '46': '',
      '30': '', '31': '', '32': '', '33': '', '34': '', '35': '', '36': '',
      '20': '', '21': '', '22': '', '23': '', '24': '', '25': '', '26': '',
      '10': '', '11': '', '12': '', '13': '', '14': '', '15': '', '16': '',
      '00': '', '01': '', '02': '', '03': '', '04': '', '05': '', '06': '',
    }
  }

  handleClick = (e) => {
    console.log(e.target.id);
  }

  render() {
   const renderedRows = [];
   
   for (let i = 5; i >= 0; i--) {
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

