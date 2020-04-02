import React, { Component} from 'react'

class PersistenciaEventos extends Component{
    state =  {
        color: 'blue'
    }

    handlerChange = (event) => {
        const color = event.target.value //ayuda a mantener el valor en memoria
        console.log(color)

        this.setState(state => ({
            color: color
        }))
    }

    render (){
        return (
            <div>
                Escribe un color en inglés:<br/>
                <input
                    type='text'
                    onChange={this.handlerChange}
                    >
                </input>
                <h1 style={{ color: this.state.color}}>
                    {this.state.color}
                </h1>
            </div>
        )
    }
}

export default PersistenciaEventos;