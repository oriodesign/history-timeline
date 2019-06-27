export function period(name, date, wiki) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "period"
    };
}

export function hydrateLevel(timeline) {
    for (let i = 0; i < timeline.length; i++) {
        const current = timeline[i].date;
        let level = 1;

        for (let j = 0; j < i; j++) {
            const other = timeline[j].date;
            if (overlaps(current[0], current[1], other[0], other[1])) {
                level = Math.max(level + 1, timeline[j].level + 1);
                console.log(level);
            }
        }

        timeline[i].level = level;
    }

    return timeline;
}

function overlaps(startA, endA, startB, endB) {
    return (startA >= startB && startA < endB) ||
        (endA > startB && endA <= endB) ||
        (startA <= startB && endA >= endB)
}