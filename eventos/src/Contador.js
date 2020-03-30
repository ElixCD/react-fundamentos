import React, { Component } from 'react';
import './App.css';

class Contador extends Component {

    state = {
      video: {
        title: 'Super Video',
        likes: 0
      }
    }
  
    add = () => {
      this.setState((state) => ({
        video:{
          ...state.video, /*Utiliza spread para mantener todos los datos del objeto*/
          likes: this.state.video.likes + 1
        }
      }))
    }
  
    render() {
      return (
        <div>
          <div>
            <h1>
              {this.state.video.title}
            </h1>
            <button onClick={this.add}>
              Likes: ({this.state.video.likes})
            </button>
          </div>
        </div>
      )
    }
  }

  export default Contador;