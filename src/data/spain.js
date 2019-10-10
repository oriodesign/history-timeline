
import { ruler, state, house } from './factory';

export const spain = [
    state("Emirate of Cordoba", [756, 929], "Emirate_of_Córdoba"),
    state("Caliphate of Cordoba", [929, 1031], "Caliphate_of_Córdoba"),

    state("Taifa of Seville", [1023, 1091], "Taifa_of_Seville"),
    state("Taifa of Córdoba", [1031, 1091], "Taifa_of_Córdoba"),
    state("Taifa of Zaragoza", [1013, 1110], "Taifa_of_Zaragoza"),
    state("Almoravid dynasty", [1040, 1147], "Almoravid_dynasty"),
    state("Second Taifa Period", [1140, 1203], "Taifa#Second_period_(12th_century)"),
    state("Almohad Caliphate", [1121, 1269], "Almohad_Caliphate"),
    state("Third Taifa Period", [1232, 1287], "Taifa#Third_period_(13th_century)"),


    state("Kingdom of Castile", [1065, 1475], "Kingdom_of_Castile"),
    state("Kingdom of Leon", [910, 1230], "Kingdom_of_León"),
    state("Kingdom of Aragon", [1035, 1475], "Kingdom_of_Aragon"),
    state("Emirate of Granada", [1230, 1492], "Emirate_of_Granada"),

    state("Kingdom of Portugal", [1139, 1910], "Kingdom_of_Portugal"),
    {
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
}].map(t => ({
    ...t,
    regions: ["spain", "europe"]
}));