import React, { Component } from 'react';
import './App.css';
import Contador from './Contador'
import Gato from './Gato'
import EventosMouse from './EventosMouse'
import EventosInput from './EventosInput'
import EventoNativoVsDOM from './EventoNativoVsDOM'
import PersistenciaEventos from './PersistenciaEventos'
import Padre from './Components/EventosPersonalizados/Padre'
import Saludo from './Saludo'

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
        <Saludo />
        <Saludo saluda />
        <Saludo name='User A' />
        <Saludo saluda name='User B' />
        <hr />
        <Padre /> {/*  Eventos personalizados */}
        <hr />
        <PersistenciaEventos />
        <hr />
        <EventoNativoVsDOM />
        <hr />
        <EventosInput />
        <hr />
        <EventosMouse />
        <hr />
        <Gato 
          name='Garfield' 
          edad='2 años'
          otrosDatos = {otrosDatos}
          {...otrosDatos}
          {...this.state}
        />
        <hr />
        <Contador /> 
        <hr />       
      </div>
    );
  }
}

export default App;
