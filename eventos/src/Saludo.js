import React from 'react'

const styles = {
    margin: '1em',
    padding: '1em',
    boxSizing: 'border-box',
    borderRadius: '0.2em',
    border: '1px solid black'
}

const Saludo = (props) => {

    if (props.saluda){
        return (
            <div style={styles}>
                <div> { props.name  && <strong> {props.name} </strong>}</div>
                <h1>¡Hola, tu eres genial!</h1>
            </div>
        )
    }
    
    return (
        <div style={styles}>
            <div> { props.name  && <strong> {props.name} </strong>}</div>
            <p>¡Wops! No hay saludos para ti</p>
        </div>
        
    )
}

export default Saludo
