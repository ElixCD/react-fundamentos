import React, { Component } from 'react';
import './App.css';

const Gato = (props) => (
    <div>
        <h1>Gato </h1>
        <pre>
            { JSON.stringify(props,null, 4)}
        </pre>
    </div>
)

export default Gato;