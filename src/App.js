import React, { useState, useEffect } from 'react';
import './App.css';

import { hydrateLevel } from './data/factory';
import { START } from './constants';
import { years } from './years';

import { TimeLine } from './components/timeline';
import { Century } from './components/century';
import { Editor } from './components/editor';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { Wiki } from './components/wiki';
import { timelines } from './data/all';
import { debounce, getCenturies } from './util';
import optionIcon from './icons/gear-option.svg';
import deleteIcon from './icons/delete.svg';
import deleteDarkIcon from './icons/delete-dark.svg';
import calendarIcon from './icons/calendar.svg';

function App() {

  const [wiki, setWiki] = useState(null);
  const [selectedWikiItem, setSelectedWikiItem] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [scale, setScale] = useState(localStorage.getItem('scale') || 2);
  const [type, setType] = useState(localStorage.getItem('type') || "all");
  const [region, setRegion] = useState(localStorage.getItem('region') || "europe");
  const [showEditor, setShowEditor] = useState(false);
  const [threshold, setThreshold] = useState(localStorage.getItem('threshold') || 1);
  const [scrollX, setScrollX] = useState(localStorage.getItem('scrollX') || 10000);
  const [scrollY, setScrollY] = useState(localStorage.getItem('scrollY') || 0);
  const [mouseX, setMouseX] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  const scrollOffset = Math.floor((scrollX / scale) - (START));
  const mouseXOffset = Math.floor((mouseX / scale)) + scrollOffset;

  const scrollListener = debounce((e) => {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
    localStorage.setItem('scrollX', window.scrollX);
    localStorage.setItem('scrollY', window.scrollY);
  }, 50);

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
    // eslint-disable-next-line
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
    switch (e.key) {
      case "e":
        setSelectedYear(mouseXOffset);
        break;
      case "q":
        setSelectedYear(null);
        break;
      case "x":
        setShowEditor(true);
        break;
      default:
        break;
    }
  }

  if (showEditor) {
    return <Editor />
  }

  const centuryWrapperStyle = {
    // top: scrollY + "px"
  };

  timelines.forEach(t => {
    t.filteredTimeline = hydrateLevel(t.timeline, type, threshold, scale);
  });



  return (
    <div className="App">

      {!showMenu && <img onClick={() => setShowMenu(true)} id="option-button" src={optionIcon} alt="open menu" />}
      {showMenu && <img onClick={() => setShowMenu(false)} id="close-option-button" src={deleteIcon} alt="close menu" />}
      {!selectedYear && <img onClick={() => setSelectedYear(mouseXOffset)} id="open-list-button" src={calendarIcon} alt="open list" />}
      {selectedYear && <img onClick={() => setSelectedYear(undefined)} id="close-list-button" src={deleteDarkIcon} alt="clse list" />}


      <Menu
        show={showMenu}
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
          {getCenturies().map(y => <Century scrollY={scrollY} scale={scale} key={y} year={y} />)}
        </div>
        {timelines
          .filter(t => (t.regions && t.regions.includes(region)) || region === "all")
          .map(t => <TimeLine 
            selectedWikiItem={selectedWikiItem} 
            setSelectedWikiItem={setSelectedWikiItem} 
            setWiki={setWiki} 
            scale={scale} 
            scrollX={scrollX} 
            key={t.title} 
            timeline={t} />)}

        {selectedYear && <div style={{ left: (selectedYear + START) * scale + "px" }} className="selected-year" />}
      </div>

      <div className="scroll-year">{scrollOffset}</div>

      <div className="mouse-year">{mouseXOffset}</div>

      {selectedYear && <Sidebar years={years} setSelectedYear={setSelectedYear} selectedYear={selectedYear} />}
      {wiki && <Wiki selectedWikiItem={selectedWikiItem} setSelectedWikiItem={setSelectedWikiItem} setWiki={setWiki} wiki={wiki} />}
    </div>
  );
}

export default App;
