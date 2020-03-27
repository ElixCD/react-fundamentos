import React from 'react';
import TarjetaFruta from './componentes/TarjetaFruta';
import './App.css';

const App = () => (
  <div>
      <TarjetaFruta name='Sandia' price={80} />
      <TarjetaFruta name='Fresa' price={50} />
      <TarjetaFruta name='Limon' price={23.5} />
      <TarjetaFruta name='Kiwi' price={85.20}></TarjetaFruta>
  </div>
)

export default App;
