import React from 'react';

export function Wiki(props) {
    const { wiki, close } = props;
    return <div {...props} className="wiki">
        <img src={wiki.thumbnail.source} />
        <h1>{wiki.title}</h1>
        <p>{wiki.extract}</p>
        <button onClick={close}>close</button>
    </div>
}