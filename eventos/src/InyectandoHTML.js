import React, { Component } from 'react'

class InyectandoHTML extends Component {

    state = {
        marcado: `
            <h1>Inyectando HTML con React</h1>
            <br />
            <a href="#">Algún link</a>
        `
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{
                    __html: this.state.marcado
                }}></div>

                <hr style={{ borderStyle: 'dotted' }} />
                
                {this.state.marcado}

            </div>
        )
    }
}


export default InyectandoHTML;