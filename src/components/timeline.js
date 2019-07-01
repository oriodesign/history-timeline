import React, { useState } from 'react';
import { Item } from './item';
import { Wiki } from './wiki';
import { SCALE, START } from "../constants";

export function TimeLine({ timeline, scrollX }) {

    const [wiki, setWiki] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    function close() {
        setWiki(null);
        setSelectedItem(null);
    }
    function onClick(item) {
        if (item === selectedItem || !item.wiki) {
            return close();
        }
        setWiki(null);
        setSelectedItem(item);
        fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + item.wiki)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                setWiki(json);
            })
    }

    const maxLevel = timeline.filteredTimeline.reduce((acc, curr) => {
        return Math.max(acc, curr.level);
    }, 0);

    const style = {
        height: (maxLevel + 3) * 10 + "px"
    };

    const left = Math.max(scrollX, (timeline.date[0] + START) * SCALE); 

    const styleName = {
        left: left + "px"
    };

    const styleBar = {
        left: (timeline.date[0] + START) * SCALE + "px",
        width: Math.abs(timeline.date[0] - timeline.date[1]) * SCALE + "px",
        backgroundColor: timeline.color
    };

    const wikiStyle = {
        left: selectedItem ? (selectedItem.date[0] + START) * SCALE + 'px' : 0,
    }

    return <div title={timeline.title} style={style} className="timeline">
        {timeline.filteredTimeline.map((item, index) => <Item onClick={onClick} color={timeline.color} index={index} key={index} item={item} />)}
        <div style={styleName} className="timeline-name">{timeline.title}</div>
        <div style={styleBar} className="timeline-bar" />
        {wiki && <Wiki item={selectedItem} close={close} style={wikiStyle} wiki={wiki} />}
    </div>
}