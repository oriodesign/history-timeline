import React, { useState } from 'react';
import './App.css';


import { hydrateLevel } from './data/factory';

import { TimeLine } from './components/timeline';
import { Century } from './components/century';
import { Editor } from './components/editor';
import { Header } from './components/header';
import { timelines } from './data/all';

const years = [];
for (let i = -1000; i <= 2000; i = i + 100) {
  years.push(i);
}

function App() {

  const [type, setType] = useState("all");
  const [threshold, setThreshold] = useState(1);

  function onChangeType(e) {
    setType(e.target.value);
  }

  function onChangeThreshold(e) {
    setThreshold(e.target.value);
  }

  timelines.forEach(t => {
    t.filteredTimeline = hydrateLevel(t.timeline, type, threshold);
  });

  return (
    <div className="App">
      
      <Header type={type} threshold={threshold} onChangeThreshold={onChangeThreshold} onChangeType={onChangeType} />

      <div className="timelines-wrapper">
        {timelines.map(t => <TimeLine key={t.name} timeline={t} />)}
        { years.map(y => <Century key={y} year={y} />)}
      </div>
      



      <Editor /> 

    </div>
  );
}

export default App;
