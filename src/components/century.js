import React from 'react';

import { SCALE } from "../constants";

export function Century({ year }) {
    const style = {
        width: 100 * SCALE + "px",
        left: (year + 1000) * SCALE + "px"
    };
    return <div style={style} className="century">{year}</div>
}