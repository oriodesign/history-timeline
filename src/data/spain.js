
import { period, ruler, house } from './factory';

export const spain = {
    title: "Spain",
    date: [1475, 2020],
    timeline: [
        house("House of Trastámara", [1479,1555], ""),
        house("House of Habsburg", [1516,1700], ""),
        house("House of Bourbon", [1700,1808], ""),
        house("House of Bonaparte", [1808,1813], ""),
        house("House of Bourbon", [1813,1868], ""),
        house("House of Savoy", [1870, 1873], ""),
        house("Spanish Republic", [1873, 1874], ""),
        house("House of Bourbon", [1874, 1931], ""),
        house("Spanish Republic ", [1931, 1939], ""),
        house("Spanish State", [1936, 1975], ""),
        house("House of Bourbon ", [1975, 2020], ""),

        ruler("Ferdinand V & II", [1475, 1504], "Ferdinand_II_of_Aragon"),
        ruler("Isabella I", [1474, 1504], "Isabella_I_of_Castile"),
        ruler("Joanna", [1504, 1555], "Joanna_of_Castile"),
        ruler("Philip I", [1506, 1506], "Philip_I_of_Castile"),
        ruler("Charles I", [1516, 1556], "Charles_V,_Holy_Roman_Emperor"),
        ruler("Philip II", [1556, 1598], "Philip_II_of_Spain"),
        ruler("Philip III", [1598, 1621], "Philip_III_of_Spain"),
        ruler("Philip IV", [1621, 1665], "Philip_IV_of_Spain"),
        ruler("Charles II", [1665, 1700], "Charles_II_of_Spain"),
        ruler("Philip V", [1700, 1724], "Philip_V_of_Spain"),
        ruler("Louis I", [1724, 1724], "Louis_I_of_Spain"),
        ruler("Philip V", [1724, 1746], "Philip_V_of_Spain"),
        ruler("Ferdinand VI", [1746, 1759], "Ferdinand_VI_of_Spain"),
        ruler("Charles III", [1759, 1788], "Charles_III_of_Spain"),
        ruler("Charles IV", [1788, 1808], "Charles_IV_of_Spain"),
        ruler("Ferdinand VII", [1808, 1808], "Ferdinand_VII_of_Spain"),
        ruler("Joseph I", [1808, 1813], "Joseph_Bonaparte"),
        ruler("Ferdinand VII", [1813, 1833], "Ferdinand_VII"),
        ruler("Isabella II", [1833, 1868], "Isabella_II_of_Spain"),
        ruler("Amadeo I", [1870, 1873], "Amadeo_I_of_Spain"),
        ruler("Alfonso XII", [1874, 1885], "Alfonso_XII"),
        ruler("Alfonso XIII", [1886, 1931], "Alfonso_XIII"),
        ruler("Juan Carlos I", [1975, 2014], "Juan_Carlos_I"),
        ruler("Felipe VI", [2014, 2020], "Felipe_VI")
    ]
};