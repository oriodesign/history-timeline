export function state(title, date, wiki, timeline, regions) {
    return {
        title,
        date,
        wiki,
        timeline: timeline || [],
        regions: regions || []
    };
}

export function year(year, events) {
    return {
        year,
        events
    }
}

export function group(states, regions) {
    return states.map(s => ({
        ...s,
        regions: [...s.regions, ...regions]
    }));
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

export function composer(name, date, wiki, star) {
    return {
        name,
        date,
        wiki,
        level: 1,
        type: "composer",
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
const MAX_LEVELS = 20;
export function hydrateLevel(original, type, threshold, scale) {
    original.sort((a, b) => a.date[0] < b.date[0] ? -1 : 1);

    const timeline = original
        .filter(t => {
            return t.type === type || type === "all"
        })
        .filter(t => {
            return t.date[1] - t.date[0] >= threshold;
        });

    let levels = [];
    let base = 1;
    const padding = 5;

    for (let i = 0; i < timeline.length; i++) {
        const current = timeline[i];
        const charSize = current.star ? 7 : 5;
        const nameSpace = charSize * current.name.length;
        const blockStarts = current.date[0] * +scale;
        const blockEnds = current.date[1] * +scale;

        const space = Math.max(blockStarts + nameSpace, blockEnds) + padding;
        let lookingForSpace = true;
        let levelIndex = 0;
        if (current.type === "house") {
            timeline[i].level = 1;
            base = 2;
            continue;
        }
        while (lookingForSpace) {
            if (typeof levels[levelIndex] === "undefined" || levels[levelIndex] < blockStarts) {
                lookingForSpace = false;
                levels[levelIndex] = space;
                timeline[i].level = levelIndex + base;
            } else if (levelIndex > MAX_LEVELS) {
                lookingForSpace = false;
                levels[0] = space;
                timeline[i].level = base;
            }
            levelIndex++;
        }
    }

    return timeline;
}
