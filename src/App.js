import React, { useState, useEffect } from 'react';
import './App.css';

import { hydrateLevel } from './data/factory';
import { START } from './constants';

import { TimeLine } from './components/timeline';
import { Century } from './components/century';
import { Editor } from './components/editor';
import { Header } from './components/header';
import { timelines } from './data/all';
import { debounce, getCenturies } from './util';

function App() {

  const [scale, setScale] = useState(3);
  const [type, setType] = useState("all");
  const [region, setRegion] = useState("all");
  const [showEditor, setShowEditor] = useState(false);
  const [threshold, setThreshold] = useState(1);
  const [scrollX, setScrollX] = useState(null);
  const [scrollY, setScrollY] = useState(null);

  const scrollListener = debounce((e) => {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
  }, 10);

  useEffect(() => {
    window.scroll(START * scale, 0);
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

  function onChangeRegion(e) {
    setRegion(e.target.value);
  }

  function onChangeScale(e) {
    setScale(e.target.value);
  }

  function onChangeThreshold(e) {
    setThreshold(e.target.value);
  }

  if (showEditor) {
    return <Editor />
  }

  const centuryWrapperStyle = {
    top: scrollY + "px"
  };

  timelines.forEach(t => {
    t.filteredTimeline = hydrateLevel(t.timeline, type, threshold);
  });

  return (
    <div className="App">
      
      <Header 
        scale={scale}
        onChangeScale={onChangeScale}
        region={region} 
        onChangeRegion={onChangeRegion} 
        type={type} 
        threshold={threshold} 
        onChangeThreshold={onChangeThreshold} 
        onChangeType={onChangeType} />

      <div className="timelines-wrapper">
        <div style={centuryWrapperStyle} className="century-wrapper">
          { getCenturies().map(y => <Century scale={scale} key={y} year={y} />)}
        </div>
        {timelines
          .filter(t => t.region === region || region === "all")
          .map(t => <TimeLine scale={scale} scrollX={scrollX} key={t.title} timeline={t} />)}
      </div>
      <button className="show-editor" onClick={() => setShowEditor(true)}>Show Editor</button>
    </div>
  );
}

export default App;
