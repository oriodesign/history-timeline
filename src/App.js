import React, { useState } from 'react';
import './App.css';

import { india } from './data/india';
import { england } from './data/england';
import { TimeLine } from './components/timeline';
import { Century } from './components/century';
import { Editor } from './components/editor';

const years = [];
for (let i = -1000; i < 2000; i = i + 100) {
  years.push(i);
}

function App() {

  return (
    <div className="App">
      
      
      <TimeLine timeline={india} />

      <TimeLine timeline={england} />

      { years.map(y => <Century key={y} year={y} />)}



      <Editor /> 

    </div>
  );
}

export default App;
