import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Test(props) {

useEffect(() => {
    console.log(props.maison)
}, [props])

  return (
    <div className="App">
        <p>
          Ca, c'est mon composant Test
        </p>
    </div>
  );
}

export default Test;