import React from 'react';

export function Menu({ show, region, scale, onChangeScale, onChangeRegion, type, onChangeType, threshold, onChangeThreshold }) {

    const style = {
        display: show ? "block" : "none"
    };

    return <header style={style} className="main-menu">

        <div className="input-field">
            <label>Event Category</label>
            <select value={type} onChange={onChangeType}>
                <option>all</option>
                <option>ruler</option>
                <option>period</option>
                <option>monument</option>
                <option>house</option>
                <option>war</option>
            </select>
        </div>

        <div className="input-field">
            <label>Region</label>
            <select value={region} onChange={onChangeRegion}>
                <option>all</option>
                <optgroup label="Macro-regions">
                    <option>europe</option>
                    <option>northern europe</option>
                    <option>Middle-East</option>
                    <option>asia</option>
                    <option>south east asia</option>
                </optgroup>
                <optgroup label="Regions">
                    <option>italy</option>
                    <option>britain</option>
                    <option>india</option>
                    <option>spain</option>
                    <option>sweden</option>
                    <option>norway</option>
                    <option>austria</option>
                    <option>germany</option>
                    <option>france</option>
                    <option>greece</option>
                    <option>egypt</option>
                    <option>russia</option>
                    <option>mongolia</option>
                </optgroup>
            </select>
        </div>

        <div className="input-field">
            <label>Event minimum duration</label>
            <select value={threshold} onChange={onChangeThreshold}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>10</option>
                <option>20</option>
            </select>
        </div>

        <div className="input-field">
            <label>Zoom</label>
            <select value={scale} onChange={onChangeScale}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    </header>

}