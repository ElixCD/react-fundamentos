import React from 'react'

const PropChildren = (props) => {
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: props.uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }
    
    return (
        <h1 style={styles}>
            {props.children}
        </h1>
    )
}

export default PropChildren;