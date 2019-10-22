import React, { useState } from 'react';

export function Header({ region, scale, onChangeScale, onChangeRegion, type, onChangeType, threshold, onChangeThreshold }) {


    return <header className="main-header">
        <h1>History Timeline</h1>

        <label>Type</label>
        <select value={type} onChange={onChangeType}>
            <option>all</option>
            <option>ruler</option>
            <option>period</option>
            <option>monument</option>
            <option>house</option>
            <option>war</option>
        </select>

        <label>Region</label>
        <select value={region} onChange={onChangeRegion}>
            <option>all</option>
            <optgroup label="Continents">
                <option>europe</option>
                <option>northern europe</option>
                <option>Middle-East</option>
                <option>asia</option>
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
                <option>south east asia</option>
            </optgroup>
        </select>
        
        <label>Min Duration</label>
        <input type="number" value={threshold} onChange={onChangeThreshold} />

        <label>Scale</label>
        <input type="number" value={scale} onChange={onChangeScale} />
    </header>

}