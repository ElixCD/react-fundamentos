import React from 'react';
import './App.css';
import PropChildren from './PropChildren'

class App extends React.Component {

  state  = {
    uiColor: 'purple'
  }

  render(){
    /* Aplicamos destructuración */
    const {uiColor} = this.state

    return (
      <div className="App">
        <PropChildren
          uiColor={uiColor}
        >
          Super <em>Ninja</em>
        </PropChildren>
      </div>
    );
  }
}

export default App;
