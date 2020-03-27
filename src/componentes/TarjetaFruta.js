import React from 'react'

class TarjetaFruta extends React.Component {
    constructor(){
        super()

        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ]

        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })

        
    }

    state = {
        cantidad : 0
    }

    agregar () {
        this.setState({
            cantidad: this.state.cantidad +1
        })
    }

    quitar () {
        this.setState({
            cantidad: this.state.cantidad -1
        })
    }

    limpiar () {
        this.setState({
            cantidad: 0
        })
    }

    render() {
        return (
            <div>
                <hr />
                <h3>{ this.props.name }</h3>                
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <p>$ { this.props.price }</p>
            </div>
        )
    }
}

export default TarjetaFruta;
