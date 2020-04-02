import React, {Component} from 'react'
import './EventosPersonalizados.css'

class Hijo extends Component{
    manejadorClick = () => {
        this.props.onSaludaProps('Hola React')
    }

    render(){
        return(
            <div className='box blue'>
                <h2>Hijo</h2>
                <button onClick= {this.props.onSaluda} > Saluda</button> {/* Ejecutando evento */}
                <button onClick= {this.manejadorClick} > Saluda Props</button> {/* Ejecutando evento y enviando informacion a función del padre */}
            </div>
        )
    }
}


export default Hijo