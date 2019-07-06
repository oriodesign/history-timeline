import React from 'react';

export function Wiki(props) {
    const { wiki, item, close } = props;
    
    return <div {...props} className="wiki">
        {wiki.thumbnail && <img src={wiki.thumbnail.source} />}
        <h1>{wiki.title}</h1>
        <p>{wiki.extract}</p>
        <p><a target="blank" href={"https://en.wikipedia.org/wiki/"+item.wiki}>Wikipedia</a></p>
        <button onClick={close}>close</button>
    </div>
}