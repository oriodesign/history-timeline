import React, { useState, useEffect } from 'react';
import './App.css';


import { hydrateLevel } from './data/factory';
import { SCALE, START } from './constants';

import { TimeLine } from './components/timeline';
import { Century } from './components/century';
import { Editor } from './components/editor';
import { Header } from './components/header';
import { timelines } from './data/all';

const years = [];
for (let i = -START; i <= 2000; i = i + 100) {
  years.push(i);
}

function App() {

  const [type, setType] = useState("all");
  const [showEditor, setShowEditor] = useState(false);
  const [threshold, setThreshold] = useState(1);

  useEffect(() => {
    window.scroll(START * SCALE, 0);
  }, []);

  function onChangeType(e) {
    setType(e.target.value);
  }

  function onChangeThreshold(e) {
    setThreshold(e.target.value);
  }

  timelines.forEach(t => {
    t.filteredTimeline = hydrateLevel(t.timeline, type, threshold);
  });

  if (showEditor) {
    return <Editor />
  }

  return (
    <div className="App">
      
      <Header type={type} threshold={threshold} onChangeThreshold={onChangeThreshold} onChangeType={onChangeType} />

      <div className="timelines-wrapper">
        {timelines.map(t => <TimeLine key={t.title} timeline={t} />)}
        { years.map(y => <Century key={y} year={y} />)}
      </div>
      <button className="show-editor" onClick={() => setShowEditor(true)}>Show Editor</button>

    </div>
  );
}

export default App;
