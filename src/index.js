import React from 'react';
import { render } from 'react-dom';
import Calculator from './Calculator';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h1>Nim calculator</h1>
    <p>
      Simple nim sum calculator. When do you win? Try to remove coins 
      according to the game rules so that your oponent gets a combination 
      with a num sum of <strong>0</strong>. Also make sure to hand over only an odd
      number of piles with one coin.
    </p>
    <Calculator/>
  </div>
);


render(<App />, document.getElementById('root'));
