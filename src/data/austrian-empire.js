import { ruler } from './factory';

export const austrianEmpire = [{
    title: "Austrian Empire",
    date: [1804, 1918],
    timeline: [
        ruler("Francis I", [1804, 1835], "Francis_II,_Holy_Roman_Emperor"),
        ruler("Ferdinand I", [1835, 1848], "Ferdinand_I_of_Austria"),
        ruler("Francis Joseph I", [1848, 1916], "Franz_Joseph_I_of_Austria"),
        ruler("Charles I", [1916, 1918], "Charles_I_of_Austria")
    ]
}].map(t => ({
    ...t,
    regions: ["austria", "europe"]
}));;
;