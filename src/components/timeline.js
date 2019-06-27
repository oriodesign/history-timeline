import React from 'react';
import { Item } from './item';

export function TimeLine({ timeline }) {
    console.log(timeline);
    return <div className="timeline">{timeline.map((item, index) => <Item index={index} key={index} item={item} />)}</div>
}