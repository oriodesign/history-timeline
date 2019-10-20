import React, { useState, useEffect } from 'react';
import './App.css';

import { hydrateLevel } from './data/factory';
import { START } from './constants';
import { years } from './years';

import { TimeLine } from './components/timeline';
import { Century } from './components/century';
import { Editor } from './components/editor';
import { Header } from './components/header';
import { timelines } from './data/all';
import { debounce, getCenturies } from './util';

function App() {

  const [scale, setScale] = useState(localStorage.getItem('scale') || 3);
  const [type, setType] = useState(localStorage.getItem('type') || "all");
  const [region, setRegion] = useState(localStorage.getItem('region') || "all");
  const [showEditor, setShowEditor] = useState(false);
  const [threshold, setThreshold] = useState(localStorage.getItem('threshold') || 1);
  const [scrollX, setScrollX] = useState(localStorage.getItem('scrollX') || 0);
  const [scrollY, setScrollY] = useState(localStorage.getItem('scrollY') || 0);
  const [mouseX, setMouseX] = useState(0);
  const scrollOffset = Math.floor((scrollX / scale) - (START));
  const mouseXOffset = Math.floor((mouseX / scale)) + scrollOffset;

  const scrollListener = debounce((e) => {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
    localStorage.setItem('scrollX', window.scrollX);
    localStorage.setItem('scrollY', window.scrollY);
  }, 10);

  const mouseMoveListener = ((e) => {
    requestAnimationFrame(() => {
      setMouseX(e.clientX);
    })
    
  });

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener);
    window.addEventListener("keypress", showEvent);
    return () => {
      window.removeEventListener("keypress", showEvent);
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  });

  useEffect(() => {
    window.scroll(scrollX, scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  function onChangeType(e) {
    localStorage.setItem("type", e.target.value)
    setType(e.target.value);
  }

  function onChangeRegion(e) {
    localStorage.setItem("region", e.target.value)
    setRegion(e.target.value);
  }

  function onChangeScale(e) {
    localStorage.setItem("scale", e.target.value)
    setScale(e.target.value);
  }

  function onChangeThreshold(e) {
    localStorage.setItem("threshold", e.target.value)
    setThreshold(e.target.value);
  }

  function showEvent(e) {
    if (e.key === "e") {
      window.alert(years.find(y => y.year === mouseXOffset).events.join("\n\n"));
    }
  }

  if (showEditor) {
    return <Editor />
  }

  const centuryWrapperStyle = {
    top: scrollY + "px"
  };

  timelines.forEach(t => {
    t.filteredTimeline = hydrateLevel(t.timeline, type, threshold, scale);
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
          { getCenturies().map(y => <Century scrollY={scrollY} scale={scale} key={y} year={y} />)}
        </div>
        {timelines
          .filter(t => (t.regions && t.regions.includes(region)) || region === "all")
          .map(t => <TimeLine scale={scale} scrollX={scrollX} key={t.title} timeline={t} />)}
      </div>
      <button className="show-editor" onClick={() => setShowEditor(true)}>Show Editor</button>

      <div className="scroll-year">{scrollOffset}</div>

      <div className="mouse-year">{mouseXOffset}</div>
    </div>
  );
}

export default App;
