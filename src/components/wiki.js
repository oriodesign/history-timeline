import React from 'react';

export function Wiki({ wiki }) {
    console.log(wiki);
    return <div className="wiki">
        <img src={wiki.thumbnail.source} />
        <h1>{wiki.title}</h1>
        <p>{wiki.extract}</p>
    </div>
}