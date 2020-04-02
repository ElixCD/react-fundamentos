import React, { Component} from 'react'

class EventoNativoVsDOM extends Component{
    manejador(e){
        e.preventDefault()
    }

    render (){
        return (
            <div>
                <a 
                    href='https://google.com'
                    onClick={this.manejador}
                >
                    GOOGLE
                </a>
            </div>
        )
    }
}

export default EventoNativoVsDOM;