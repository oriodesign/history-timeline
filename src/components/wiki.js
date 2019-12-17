import React from 'react';
import deleteIcon from '../icons/delete-dark.svg';

export function Wiki(props) {
    const { wiki, item, close } = props;
    
    return <div {...props} className="wiki">

        <img onClick={close} class="close-wiki" src={deleteIcon} />

        {wiki.thumbnail && <img src={wiki.thumbnail.source} />}
        <h1>{wiki.title}</h1>
        <p class="extract">{wiki.extract}</p>
        <p><a className="wiki-link" target="blank" href={"https://en.wikipedia.org/wiki/"+item.wiki}>Wikipedia</a></p>
    </div>
}