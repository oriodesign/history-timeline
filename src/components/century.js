import React, { useState } from 'react';

import { SCALE, START } from "../constants";

export function Century({ year }) {

    const [selected, setSelected] = useState(false);

    const style = {
        width: 100 * SCALE + "px",
        left: (year + START) * SCALE + "px",
        background: selected ? "yellow" : null
    };
    return <>
    <div style={style} className="century-title">{year}</div>
    <div onClick={() => setSelected(!selected)} style={style} className="century" /></>
}