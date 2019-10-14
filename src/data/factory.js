export function state(title, date, wiki, timeline) {
    return {
        title,
        date,
        wiki,
        timeline: timeline || []
    };
}

export function ruler(name, date, wiki, star) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "ruler",
        star: star === '★'
    };
}

export function monument(name, date, wiki) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "monument"
    };
}

export function battle(name, date, wiki) {
    return {
        name,
        date: [date, date],
        wiki,
        level: 1,
        type: "battle"
    };
}

export function book(name, date, wiki) {
    return {
        name,
        date: [date, date],
        wiki,
        level: 1,
        type: "book"
    };
}

export function war(name, date, wiki) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "war"
    };
}

export function person(name, date, wiki, star) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "person",
        star: star === '★'
    };
}

export function writer(name, date, wiki, star) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "writer",
        star: star === '★'
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

export function hydrateLevel(original, type, threshold) {
    const MAX_LEVEL = 10;
    original.sort((a, b) => a.date[0] < b.date[0] ? -1 : 1);

    const timeline = original
    .filter(t => {
        return t.type === type || type === "all"
    })
    .filter(t => {
        return t.date[1] - t.date[0] >= threshold;
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