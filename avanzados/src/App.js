import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropChildren from './PropChildren'

class App extends React.Component {

  state  = {
    uiColor: 'purple'
  }

  render(){
    return (
      <div className="App">
        <PropChildren
          uiColor={this.state.uiColor}
        >
          Super <em>Ninja</em>
        </PropChildren>
      </div>
    );
  }
}

export default App;
