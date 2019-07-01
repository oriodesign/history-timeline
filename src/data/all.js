import { india } from './india';
import { england } from './england';
import { france } from './france';
import { sweden } from './sweden';
import { rome } from './rome';
import { russia } from './russia';
import { holyRomanEmpire } from './holy-roman';
import { austrianEmpire } from './austrian-empire';
import { florence } from './florence';
import { italy } from './italy';
import { sicily, naples, kingdomOfTwoSicily } from './sicily';
import { spain } from './spain';
import { ancientEgypt } from './egypt';

const range = ["44", "88", "BB"];

const palette = [];
range.forEach((r => {
    range.forEach((g => {
        range.forEach((b => {
            palette.push("#" + r + g + b);
        }));
    }));
}));

export const timelines = [
    ancientEgypt,
    rome,
    holyRomanEmpire,
    russia,
    austrianEmpire,
    france,
    spain,
    sicily,
    naples,
    kingdomOfTwoSicily,
    italy,
    florence,
    india, 
    england,
    sweden
].map((t, i) => {
    t.color = palette[i % palette.length]
    return t;
});