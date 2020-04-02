import React, { Component } from 'react';
import './App.css';
import Contador from './Contador'
import Gato from './Gato'
import EventosMouse from './EventosMouse'
import EventosInput from './EventosInput'
import EventoNativoVsDOM from './EventoNativoVsDOM'
import PersistenciaEventos from './PersistenciaEventos'
import Padre from './Components/EventosPersonalizados/Padre'

class App extends Component {
  state = {
    fuerza: 100,
    vidasRestantes:7,
  }

  render() {
    const otrosDatos = {
      raza : 'tropical',
      peleasNocturnas: 300,
    }

    return (
      <div>
        <Padre />
        <hr />
        <PersistenciaEventos />
        <EventoNativoVsDOM />
        <EventosInput />
        <EventosMouse />
        <Gato 
          name='Garfield' 
          edad='2 años'
          otrosDatos = {otrosDatos}
          {...otrosDatos}
          {...this.state}
        />
        <Contador />        
      </div>
    );
  }
}

export default App;
