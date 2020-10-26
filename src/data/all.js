import { india } from './india';
import { england } from './england';
import { france } from './france';
import { sweden } from './sweden';
import { norway } from './norway';
import { denmark } from './denmark';
import { greece } from './greece';
import { rome } from './rome';
import { russia } from './russia';
import { holyRomanEmpire } from './holyRoman';
import { austrianEmpire } from './austrian-empire';
import { italy } from './italy';
import { sicily } from './sicily';
import { spain } from './spain';
import { egypt } from './egypt';
import { middleEast } from './middle-east';
import { southEastAsia } from './southEastAsia';
import { mongolia } from './mongolia';
import { poland } from './poland';

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
    ...norway,
    ...greece,
    ...egypt,
    ...russia,
    ...poland,
    ...rome,
    ...holyRomanEmpire,
    ...austrianEmpire,
    ...france,
    ...spain,
    ...sicily,
    ...southEastAsia,
    ...italy,
    ...india,
    ...middleEast,
    ...england,
    ...sweden,
    ...mongolia,
    ...denmark

].sort((a, b) => {
    return a.date[0] < b.date[0] ? -1 : 1
}).map((t, i) => {
    t.color = palette[i % palette.length]
    return t;
});