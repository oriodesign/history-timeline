import React, { useState } from 'react';

import { Wiki } from './wiki';

export function Item({ item }) {
    const [wiki, setWiki] = useState(null);
    function onClick() {
        if (wiki) {
            return setWiki(null);
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
        left: item.date[0] + 1000 + 'px',
        width: Math.abs(item.date[0] - item.date[1]) + 'px',
        height: (item.level) * 10 + "px",
        zIndex: 10 - item.level
    };
    return <div onClick={onClick} className="item" style={style}>{item.name} {wiki && <Wiki wiki={wiki} />}</div>
}