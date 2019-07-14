import { state, ruler } from './factory';

export const italy = [
    state("March of Tuscany", [846, 1197], "March_of_Tuscany"),
    state("Republic of Florence", [1115, 1532], "Republic_of_Florence", [
        ruler("Cosimo de' Medici", [1433, 1463], "Cosimo_de%27_Medici"),
        ruler("Piero I the Gouty", [1463, 1468], "Piero_I_de%27_Medici"),
        ruler("Lorenzo I the Magnificent", [1468, 1491], "Lorenzo_I_de%27_Medici"),
        ruler("Giuliano I de' Medici", [1468, 1477], "Giuliano_di_Piero_de%27_Medici"),
        ruler("Piero II the Unfortunate", [1491, 1493], "Piero_II_de%27_Medici"),
        ruler("Girolamo Savonarola", [1493, 1497], "Girolamo_Savonarola"),
        ruler("Piero Soderini", [1501, 1511], "Piero_Soderini"),
        ruler("Cardinal Giovanni de' Medici", [1511, 1512], "Pope_Leo_X"),
        ruler("Giuliano II, Duke of Nemours", [1512, 1515], "Giuliano_de%27_Medici,_Duke_of_Nemours"),
        ruler("Lorenzo II de Medici", [1515, 1518], "Lorenzo_de%27_Medici,_Duke_of_Urbino"),
        ruler("Cardinal Giulio de' Medici", [1518, 1522], "Pope_Clement_VII"),
        ruler("Ippolito de' Medici", [1522, 1526], "Ippolito_de%27_Medici"),
        ruler("Alessandro de' Medici", [1526, 1529], "Alessandro_de%27_Medici"),
        ruler("Alessandro de' Medici", [1530, 1531], "Alessandro_de%27_Medici"),
    ]),
    state("Duchy of Florence", [1532, 1569], "Duchy_of_Florence", [
        ruler("Alessandro de' Medici", [1531, 1536], "Alessandro_de%27_Medici"),
        ruler("Cosimo II de' Medici", [1536, 1568], "Cosimo_I_de%27_Medici,_Grand_Duke_of_Tuscany"),
    ]),
    state("Grand Duchy of Tuscany", [1569, 1801], "Grand_Duchy_of_Tuscany", [
        ruler("Cosimo I de' Medici, Grand Duke of Tuscany", [1568, 1573], "Cosimo_I_de%27_Medici,_Grand_Duke_of_Tuscany"),
        ruler("Francesco I de' Medici", [1573, 1586], "Francesco_I_de%27_Medici"),
        ruler("Ferdinando I de' Medici", [1586, 1608], "Ferdinando_I_de%27_Medici"),
        ruler("Cosimo II de' Medici", [1608, 1620], "Cosimo_II_de%27_Medici"),
        ruler("Ferdinando II de' Medici", [1620, 1669], "Ferdinando_II_de%27_Medici"),
        ruler("Cosimo III de' Medici", [1669, 1722], "Cosimo_III_de_Medici"),
        ruler("Gian Gastone de' Medici", [1722, 1736], "Gian_Gastone_de%27_Medici"),
        ruler("Francesco II Stefano", [1736, 1764], "Francis_I,_Holy_Roman_Emperor"),
        ruler("Pietro Leopoldo I", [1764, 1789], "Leopold_II,_Holy_Roman_Emperor"),
        ruler("Ferdinando III", [1789, 1800], "Ferdinand_III,_Grand_Duke_of_Tuscany"),
    ]),
    state("Kingdom of Etruria", [1801, 1807], "Kingdom_of_Etruria"),
    state("Grand Duchy of Tuscany II", [1815, 1859], "Grand_Duchy_of_Tuscany", [
        ruler("Ferdinando III", [1813, 1823], "Ferdinand_III,_Grand_Duke_of_Tuscany"),
        ruler("Leopoldo II", [1823, 1859], "Leopold_II,_Grand_Duke_of_Tuscany"),
        ruler("Ferdinando IV", [1859, 1860], "Ferdinand_IV,_Grand_Duke_of_Tuscany")
    ]),
    
    {
    title: "Italy",
    date: [1861, 2020],
    timeline: [
        ruler("Victor Emmanuel II", [1861, 1878], "Victor_Emmanuel_II_of_Italy"),
        ruler("Umberto I", [1878, 1900], "Umberto_I_of_Italy"),
        ruler("Victor Emmanuel III", [1900, 1946], "Victor_Emmanuel_III_of_Italy"),
        ruler("Umberto II", [1946, 1946], "Umberto_II_of_Italy"),
    ]
}];
