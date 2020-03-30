import React, {Component} from 'react';

const styles = {
    height:'200px',
    background:'gold',
    padding:'1em',
    boxSizing: 'border-box'
}

class EventosMouse extends Component{

    state = {
        x : 0,
        y : 0
    }

    manejador = (event) => {
        this.setState({
            x: event.clientX,
            y:event.clientY,
        })
    }

    render(){
        return ( 
            <div style={styles} onMouseMove={this.manejador}>
                x: {this.state.x}
                y: {this.state.y}
            </div>
        )
    }
}

export default EventosMouse