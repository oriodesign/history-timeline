import React, { useState, useRef, useEffect } from 'react';
import { Item } from './item';
import { Wiki } from './wiki';
import { START } from "../constants";

export function TimeLine({ timeline, scrollX, scale }) {

    const [wiki, setWiki] = useState(null);
    const ref = useRef(null);
    const [labelWidth, setLabelWidth] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setLabelWidth(ref.current.getBoundingClientRect().width);
    }, [ref.current]);

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
        height: (maxLevel + 2) * 10 + "px"
    };

    const maxLeft = ((timeline.date[1] + START)  * scale) - labelWidth;
    const minLeft = (timeline.date[0] + START) * scale;
    const left = scrollX > minLeft && scrollX < maxLeft ? scrollX : scrollX > maxLeft ? maxLeft : minLeft; 

    const styleName = {
        left: left + "px"
    };

    const styleBar = {
        left: (timeline.date[0] + START) * scale + "px",
        width: Math.abs(timeline.date[0] - timeline.date[1]) * scale + "px",
        backgroundColor: timeline.color
    };

    const wikiStyle = {
        left: selectedItem ? (selectedItem.date[0] + START) * scale + 'px' : 0,
    }

    return <div title={timeline.title} style={style} className="timeline">
        {timeline.filteredTimeline.map((item, index) => <Item scale={scale} onClick={onClick} color={timeline.color} index={index} key={index} item={item} />)}
        <div ref={ref} style={styleName} className="timeline-name">{timeline.title}</div>
        <div onClick={e => onClick(timeline)} style={styleBar} className="timeline-bar" />
        {wiki && <Wiki item={selectedItem} close={close} style={wikiStyle} wiki={wiki} />}
    </div>
}