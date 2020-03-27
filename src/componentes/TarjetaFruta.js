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
        const styles = {
            border: '1px solid black',
            marginBottom : '1em', /*Comentario y estilo recomendado*/
            'margin-top' : '1em' //Comentario y estilo no recomendado
        }

        return (
            <div style={styles}>
                <h3>{ this.props.name }</h3>                
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <hr />
                <p>$ { this.props.price }</p>
            </div>
        )
    }
}

export default TarjetaFruta;
