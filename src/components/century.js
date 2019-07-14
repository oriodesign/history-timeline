import React, { useState } from 'react';

import { START } from "../constants";

export function Century({ year, scale }) {

    const [selected, setSelected] = useState(false);

    const style = {
        width: 100 * scale + "px",
        left: (year + START) * scale + "px",
        background: selected ? "yellow" : null
    };
    return <>
    <div style={style} className="century-title">{year}</div>
    <div onClick={() => setSelected(!selected)} style={style} className="century" /></>
}