import React from 'react';
import { Item } from './item';

import { SCALE } from "../constants";

export function TimeLine({ timeline }) {

    const style = {
        left: (timeline.date[0] + 1000) * SCALE + "px",
        width: Math.abs(timeline.date[0] - timeline.date[1]) * SCALE + "px",
        backgroundColor: timeline.color
    };

    return <div className="timeline">
        {timeline.timeline.map((item, index) => <Item color={timeline.color} index={index} key={index} item={item} />)}
        <div style={style} className="timeline-name">{timeline.title}</div>
    </div>
}