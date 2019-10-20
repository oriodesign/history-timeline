import React, { useState } from 'react';

import { START } from "../constants";

export function Century({ year, scale }) {

    const style = {
        width: 100 * scale + "px",
        left: (year + START) * scale + "px"
    };
    return <><div style={style} className="century" /></>
}