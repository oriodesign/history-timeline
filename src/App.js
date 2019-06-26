import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { india } from './data/india';

function TimeLine({ timeline }) {
  console.log(timeline);
  return <div className="timeline">{timeline.map((item, index) => <Item index={index} key={index} item={item} />)}</div>
}

function Wiki({wiki}) {
  console.log(wiki);
  return <div className="wiki">
    <img src={wiki.thumbnail.source} />
    <h1>{ wiki.title}</h1>
    <p>{wiki.extract}</p>
  </div>
}

function Item({ item, index }) {
  const [wiki, setWiki] = useState(null);
  function onClick() {
    if (wiki) {
      return setWiki(null);
    }
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + item.wiki)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      setWiki(json);
    })
  }
  const style = {
    left: item.date[0] + 'px',
    width: Math.abs(item.date[0] - item.date[1])  + 'px',
    height: ((index % 10) + 1) * 10 + "px" 
  };
  return <div onClick={onClick} className="item" style={style}>{item.name} {wiki && <Wiki wiki={wiki} />}</div>
}

function App() {
  return (
    <div className="App">
      <TimeLine timeline={india.timeline} />
    </div>
  );
}

export default App;
