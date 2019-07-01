import React, { useState, useEffect } from 'react';
import './App.css';

import { hydrateLevel } from './data/factory';
import { SCALE, START } from './constants';

import { TimeLine } from './components/timeline';
import { Century } from './components/century';
import { Editor } from './components/editor';
import { Header } from './components/header';
import { timelines } from './data/all';
import { debounce, getCenturies } from './util';


function App() {

  const [type, setType] = useState("all");
  const [showEditor, setShowEditor] = useState(false);
  const [threshold, setThreshold] = useState(1);
  const [scrollX, setScrollX] = useState(null);

  const scrollListener = debounce((e) => {
    setScrollX(window.scrollX);
  }, 100);

  useEffect(() => {
    window.scroll(START * SCALE, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

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
        {timelines.map(t => <TimeLine scrollX={scrollX} key={t.title} timeline={t} />)}
        { getCenturies().map(y => <Century key={y} year={y} />)}
      </div>
      <button className="show-editor" onClick={() => setShowEditor(true)}>Show Editor</button>
    </div>
  );
}

export default App;
