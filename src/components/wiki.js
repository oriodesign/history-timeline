import React from 'react';
import deleteIcon from '../icons/delete-dark.svg';

export function Wiki(props) {
    const { wiki, setWiki, selectedWikiItem, setSelectedWikiItem } = props;

    function onClose() {
        setWiki(null);
        setSelectedWikiItem(null);
    }
    
    return <div {...props} className="wiki">

        <img onClick={onClose} class="close-wiki" src={deleteIcon} alt="close wiki" />

        {wiki.thumbnail && <img src={wiki.thumbnail.source} alt={wiki.title} />}
        <h1>{wiki.title}</h1>
        <p class="extract">{wiki.extract}</p>
        <p><a className="wiki-link" target="blank" href={"https://en.wikipedia.org/wiki/"+selectedWikiItem.wiki}>Wikipedia</a></p>
    </div>
}