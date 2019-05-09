import React from 'react';
import Row from './Row.jsx';

class App extends React.Component {
  render() {
   const renderedRows = [];
   
   for (let i = 5; i >= 0; i--) {
     renderedRows.push(<Row key={i} y={i} />);
   }

    return (
      <div>
        {renderedRows}
      </div>
    );
  }
}

export default App;

