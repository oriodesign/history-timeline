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
        </select>

        <label>Region</label>
        <select value={region} onChange={onChangeRegion}>
            <option>all</option>
            <option>italy</option>
            <option>britain</option>
            <option>india</option>
            <option>Middle-East</option>
            <option>spain</option>
            <option>south east asia</option>
        </select>
        
        <label>Min Duration</label>
        <input type="number" value={threshold} onChange={onChangeThreshold} />

        <label>Scale</label>
        <input type="number" value={scale} onChange={onChangeScale} />
    </header>

}