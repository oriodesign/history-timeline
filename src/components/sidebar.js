import React, { useEffect } from 'react';

export function Sidebar({ years, selectedYear, setSelectedYear }) {

    useEffect(() => {
        var element = document.getElementById("year-" + selectedYear);
        if (element) {
            element.scrollIntoView();
            document.getElementById("sidebar").scrollTop -= 50;
        }
        
    }, [selectedYear]);

    return <div id="sidebar" className="sidebar">
        {years.map(y => <div 
            onClick={() => setSelectedYear(y.year)}
            className={y.year === selectedYear ? "year selected" : "year"}  id={"year-" + y.year}>
            <h1>{y.year}</h1>
            {y.events.map(e => <div className="year-event">
                {e}
            </div>)}
        </div>)}
    </div>
}
