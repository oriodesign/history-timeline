import { ruler, house, writer } from './factory';

export const greece = [{
    title: "Athens",
    date: [-508, -86],
    timeline: [
        ruler("Pericles", [-495, -429], "Pericles"),
        writer("Socrates", [-470, -399], "Plato"),
        writer("Plato", [-428, -348], "Plato"),
        writer("Aristotle", [-384, -322], "Aristotle")

    ]
}, {
    title: "Kingdom of Macedonia",
    date: [-808, -168],
    timeline: [
        ruler("Alexander the Great", [-336, -323], "Alexander_the_Great")
    ]
}].map(t => ({
    ...t,
    regions: ["greece", "europe"]
})); 