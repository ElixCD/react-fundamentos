import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Elix Castillo'

const user1 = {
    name: 'Froylán',
    age: '37',
    country: 'México'
}

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

const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={80} />
        <TarjetaFruta name='Fresa' price={50} />
        <TarjetaFruta name='Limon' price={23.5} />
        <TarjetaFruta name='Kiwi' price={85.20}></TarjetaFruta>
    </div>
)

const root = document.getElementById('root')
ReactDOM.render(<App />, root)