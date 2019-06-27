import React from 'react';
import './App.css';

import { india } from './data/india';
import { hydrateLevel } from './data/factory';
import { TimeLine } from './components/timeline';
import { Century } from './components/century';

const years = [];
for (let i = -1000; i < 2000; i = i + 100) {
  years.push(i);
}

function App() {
  const sorted = hydrateLevel(india.timeline);
  return (
    <div className="App">
      <TimeLine timeline={sorted} />
      { years.map(y => <Century key={y} year={y} />)}
    </div>
  );
}

export default App;
