import React from 'react';

export function Century({ year }) {
    const style = {
        width: "100px",
        left: year+1000+"px"
    };
    return <div style={style} className="century">{year}</div>
}