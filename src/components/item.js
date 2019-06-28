import React, { useState } from 'react';

import { Wiki } from './wiki';
import { SCALE } from "../constants";

export function Item({ item, color }) {
    const [wiki, setWiki] = useState(null);
    function close() {
        setWiki(null);
    }
    function onClick() {
        if (wiki || !item.wiki) {
            return close();
        }
        fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + item.wiki)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                setWiki(json);
            })
    }

    const style = {
        height: (item.level) * 10 + "px",
        backgroundColor: color
    };

    const styleItemPosition = {
        left: (item.date[0] + 1000) * SCALE + 'px',
        zIndex: 100 - item.level,
        width: Math.abs(item.date[0] - item.date[1]) * SCALE + 'px',
    };

    const nameStyle = {
        color: color
    };
    const wikiStyle = {
        left: style.left * SCALE + 'px'
    }
    return <div style={styleItemPosition} className={"item-position " + item.type}>
        <div style={nameStyle} className="item-name">{item.name}</div>
        <div onClick={onClick} className="item" style={style}></div>
        {wiki && <Wiki close={close} style={wikiStyle} wiki={wiki} />}
    </div>;
}