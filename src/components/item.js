import React from 'react';


import { SCALE, START } from "../constants";

export function Item({ item, color, onClick }) {
   

    const style = {
        height: (item.level) * 10 + "px",
        backgroundColor: color
    };

    const styleItemPosition = {
        left: (item.date[0] + START) * SCALE + 'px',
        zIndex: 100 - item.level,
        width: Math.abs(item.date[0] - item.date[1]) * SCALE + 'px',
    };

    const nameStyle = {
        color: color
    };
    
    return <div title={item.name + " (" + item.date[0] + ", " + item.date[1] + ")"} style={styleItemPosition} className={"item-position " + item.type}>
        <div style={nameStyle} className="item-name">{item.name}</div>
        <div onClick={() => onClick(item)} className="item" style={style}></div>
    </div>;
}