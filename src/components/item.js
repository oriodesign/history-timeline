import React from 'react';

import { START } from "../constants";

const ITEM_HEIGHT = 10;

export function Item({ scale, item, color, onClick }) {
   
    const style = {
        height: (item.level) * ITEM_HEIGHT + "px",
        backgroundColor: color
    };

    const styleItemPosition = {
        left: (item.date[0] + START) * scale + 'px',
        zIndex: 100 - item.level,
        width: Math.abs(item.date[0] - item.date[1]) * scale + 'px',
    };

    const nameStyle = {
        color: color
    };
    
    return <div title={item.name + " (" + item.date[0] + ", " + item.date[1] + ")"} style={styleItemPosition} className={"item-position " + item.type}>
        <div style={nameStyle} className="item-name">{item.name}</div>
        <div onClick={() => onClick(item)} className="item" style={style}></div>
    </div>;
}