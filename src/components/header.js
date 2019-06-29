import React, { useState } from 'react';

export function Header({ type, onChangeType, threshold, onChangeThreshold }) {


    return <header className="main-header">
        <h1>History Timeline</h1>
        <select value={type} onChange={onChangeType}>
            <option>all</option>
            <option>ruler</option>
            <option>period</option>
            <option>house</option>
        </select>
        <input type="number" value={threshold} onChange={onChangeThreshold} />
    </header>

}