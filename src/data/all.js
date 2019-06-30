import { india } from './india';
import { england } from './england';
import { france } from './france';
import { sweden } from './sweden';
import { rome } from './rome';
import { russia } from './russia';
import { holyRomanEmpire } from './holy-roman';
import { austrianEmpire } from './austrian-empire';

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
    rome,
    holyRomanEmpire,
    russia,
    austrianEmpire,
    france,
    india, 
    england,
    sweden
].map((t, i) => {
    t.color = palette[i % palette.length]
    return t;
});