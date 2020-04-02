import React, {Component} from 'react'
import './EventosPersonalizados.css'
// import styles from './EventosPersonalizados.css'
import Hijo from './Hijo'

class Padre extends Component{
    state = {
        name:''
    }

    manejador = () => {
        alert('Hey')
    }

    manejadorProps = (name) => {
        this.setState({name: name}) /* Almacenando el valor recibido del hijo en state.name */
    }

    render(){
        return(
            <div className='box red'>
                <Hijo 
                    onSaluda={this.manejador} /* Llamando un método del padre utilizando eventos del hijo  */
                    onSaludaProps ={this.manejadorProps} /* Llamando un método del padre útilizando eventos del hijo y enviando un valor al evento */
                />
                <h2>Padre</h2>
                <h1>Nombre : {this.state.name} </h1>
                     
            </div>
        )
    }
}


export default Padre