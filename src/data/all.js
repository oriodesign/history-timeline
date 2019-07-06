import { india, maurya, mahajanapadas, vedicPeriod, indusValley } from './india';
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
import { assyriaEarlyPeriod, urukPeriod, jamdetNasrPeriod, earlyDynasticPeriod,  gutianDynasty, secondMarioteKingdom, thirdMarioteKingdom, kassiteDynasty, firstBabylonianEmpire, oldAssyrianEmpire, middleAssyrianEmpire, neoAssyrianEmpire, medianEmpire, abbasidCaliphate, achaemenidEmpire, mamlukSultanate, parthianEmpire, rashidunCaliphate, sasanianEmpire, seleucidEmpire, umayyadCaliphate } from './persia';

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
    mahajanapadas, 
    maurya,
    indusValley,
    urukPeriod,
    vedicPeriod,
    jamdetNasrPeriod,
    assyriaEarlyPeriod,
    earlyDynasticPeriod,
    gutianDynasty,
    secondMarioteKingdom,
    thirdMarioteKingdom,
    oldAssyrianEmpire,
    middleAssyrianEmpire,
    firstBabylonianEmpire,
    kassiteDynasty,
    neoAssyrianEmpire,
    medianEmpire,
    abbasidCaliphate,
    achaemenidEmpire,
    mamlukSultanate,
    parthianEmpire,
    rashidunCaliphate,
    sasanianEmpire,
    seleucidEmpire,
    umayyadCaliphate,
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
    sweden,

].sort((a, b) => {
    return a.date[0] < b.date[0] ? -1 : 1
}).map((t, i) => {
    t.color = palette[i % palette.length]
    return t;
});