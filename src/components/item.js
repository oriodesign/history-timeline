import React from 'react';

import { START } from "../constants";

const ITEM_HEIGHT = 10;

export function Item({ scale, item, color, onClick }) {
   
    const style = {
        height: (item.level) * ITEM_HEIGHT + "px",
        backgroundColor: color
    };

    const duration = Math.abs(item.date[0] - item.date[1]) || 1;

    const styleItemPosition = {
        left: (item.date[0] + START) * scale + 'px',
        zIndex: 100 - item.level,
        width: duration * scale + 'px',
    };

    const nameStyle = {
        color: color,
        fontWeight: item.star ? 'bold' : 'normal',
        fontSize: item.star ? '11px' : '8px'
    };

    if (item.type === "battle") {
        nameStyle.fontSize = '15px';
        nameStyle.marginLeft = '-2px';
        nameStyle.marginTop = '-2px';
    }

    const name = item.type === "battle" ? "†" : item.name;
    
    return <div title={item.name + " (" + item.date[0] + ", " + item.date[1] + ")"} style={styleItemPosition} className={"item-position " + item.type}>
        <div style={nameStyle} className="item-name">{name}</div>
        <div onClick={() => onClick(item)} className="item" style={style}></div>
    </div>;
}