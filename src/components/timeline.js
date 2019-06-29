import React from 'react';
import { Item } from './item';

import { SCALE } from "../constants";

export function TimeLine({ timeline }) {

    const maxLevel = timeline.filteredTimeline.reduce((acc, curr) => {
        return Math.max(acc, curr.level);
    }, 0);

    const style = {
        height: (maxLevel + 3) * 10 + "px"
    };

    const styleName = {
        left: (timeline.date[0] + 1000) * SCALE + "px",
        width: Math.abs(timeline.date[0] - timeline.date[1]) * SCALE + "px",
        backgroundColor: timeline.color
    };

    return <div style={style} className="timeline">
        {timeline.filteredTimeline.map((item, index) => <Item color={timeline.color} index={index} key={index} item={item} />)}
        <div style={styleName} className="timeline-name">{timeline.title}</div>
    </div>
}