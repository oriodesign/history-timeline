export function period(name, date, wiki) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "period"
    };
}

export function ruler(name, date, wiki) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "ruler"
    };
}

export function house(name, date, wiki) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "house"
    };
}

export function hydrateLevel(original) {
    const MIN_YEARS = 5;
    const MAX_LEVEL = 10;
    original.sort((a, b) => a.date[0] < b.date[0] ? -1 : 1);

    const timeline = original.filter(t => {
        return t.date[1] - t.date[0] > MIN_YEARS;
    });
    for (let i = 0; i < timeline.length; i++) {
        const current = timeline[i].date;
        let level = timeline[i].type === "house" ? 1 : 2;

        for (let j = 0; j < i; j++) {
            const other = timeline[j].date;
            if (timeline[i].type === "house") {
                level = 1;
            } else if (timeline[j].type !== "house" && overlaps(current[0], current[1], other[0], other[1])) {
                level = Math.max(level + 1, timeline[j].level + 1);
                level = level > MAX_LEVEL ? 2 : level; 
            }
        }

        timeline[i].level = level;
    }

    return timeline;
}

function overlaps(startA, endA, startB, endB) {
    return (startA >= startB && startA <= endB) ||
        (endA >= startB && endA <= endB) ||
        (startA <= startB && endA >= endB)
}