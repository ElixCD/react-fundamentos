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
        this.setState({name: name})
    }

    render(){
        return(
            <div className='box red'>
                <Hijo 
                    onSaluda={this.manejador} 
                    onSaludaProps ={this.manejadorProps}
                />

                <h1>Nombre : {this.state.name} </h1>
                     
            </div>
        )
    }
}


export default Padre