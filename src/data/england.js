import { house, ruler, person } from './factory';

export const england = [
{
    title: "Wessex",
    wiki: "Indus_Valley_Civilisation",
    date: [519, 927],
    timeline: [
        ruler("Cerdic", [519, 534], "Cerdic_of_Wessex"),
        ruler("Ecgberht", [802, 839], "Ecgberht,_King_of_Wessex"),
        ruler("Æthelwulf", [839, 858], "Æthelwulf,_King_of_Wessex"),
        ruler("Alfred", [871, 899], "Alfred_the_Great"),
        ruler("Edward", [899, 924], "Edward_the_Elder"),
        ruler("Æthelstan", [924, 927], "Æthelstan"),
    ]
},
{
    title: "Sussex",
    wiki: "Kingdom_of_Sussex",
    date: [477, 860],
    timeline: []
},
{
    title: "Essex",
    wiki: "Kingdom_of_Essex",
    date: [527, 825],
    timeline: []
},
{
    title: "East Anglia",
    wiki: "Kingdom_of_East_Anglia",
    date: [550, 918],
    timeline: []
},
{
    title: "Kent",
    date: [455, 871],
    timeline: []
},
{
    title: "Mercia",
    date: [527, 918],
    timeline: []
},
{
    title: "Northumbria",
    wiki: "Kingdom_of_Northumbria",
    date: [593, 954],
    timeline: [
        person("Cuthbert", [634, 687], "Cuthbert"),
        person("Bede", [673, 735], "Bede"),
        ruler("Oswald", [634, 642], "Oswald_of_Northumbria"),
        ruler("Oswiu", [642, 670], "Oswiu"),
    ]
},
{
    title: "England",
    date: [927, 2020],
    timeline: [
        // houses
        house("House of Wessex", [927, 1013], "House_of_Wessex"),
        house("House of Denmark", [1013, 1014], "House_of_Denmark"),
        house("House of Wessex", [1014, 1016], "House_of_Wessex"),
        house("House of Denmark", [1016, 1042], "House_of_Denmark"),
        house("House of Wessex", [1042, 1066], "House_of_Wessex"),
        house("House of Normandy", [1066, 1135], "House_of_Normandy"),
        house("House of Blois", [1135, 1154], "House_of_Normandy"),
        house("House of Anjou", [1154, 1216], "House_of_Anjou"),
        house("House of Plantagenet", [1216, 1399], "House_of_Plantagenet"),
        house("House of Lancaster", [1399, 1461], "House_of_Lancaster"),
        house("House of York", [1461, 1470], "House_of_York"),
        house("House of Lancaster", [1470, 1471], "House_of_Lancaster"),
        house("House of York", [1471, 1485], "House_of_York"),
        house("House of Tudor", [1485, 1603], "House_of_Tudor"),
        house("House of Stuart", [1603, 1649], "House_of_Stuart"),
        house("Interregnum", [1649, 1660], "Interregnum_(1649–1660)"),
        house("House of Stuart", [1660, 1707], "House_of_Stuart"),

        // Kings
        ruler("Æthelstan", [927, 939], "Æthelstan"),
        ruler("Edmund I", [939, 946], ""),
        ruler("Eadred", [946, 955], ""),
        ruler("Eadwig", [955, 959], ""),
        ruler("Edgar the Peaceful", [959, 975], ""),
        ruler("Edward the Martyr", [975, 978], ""),
        ruler("Æthelred the Unready", [978, 1013], ""),
        ruler("Sweyn Forkbeard", [1013, 1014], ""),
        ruler("Æthelred the Unready", [1014, 1016], ""),
        ruler("Edmund Ironside", [1016, 1016], ""),
        ruler("Cnut the Great", [1016, 1035], ""),
        ruler("Harold Harefoot", [1035, 1040], ""),
        ruler("Harthacnut", [1040, 1042], ""),
        ruler("Edward the Confessor", [1042, 1066], ""),
        ruler("Harold Godwinson", [1066, 1066], ""),
        ruler("Edgar the Ætheling", [1066, 1066], ""),
        ruler("William I", [1066, 1087], ""),
        ruler("William II", [1087, 1100], ""),
        ruler("Henry I", [1100, 1135], ""),
        ruler("Stephen, King", [1135, 1154], ""),
        ruler("Empress Matilda", [1141, 1141], ""),
        ruler("Henry II", [1154, 1189], ""),
        ruler("Henry the Young King", [1170, 1189], ""),
        ruler("Richard I", [1189, 1199], ""),
        ruler("John, King", [1199, 1216], ""),
        ruler("Henry III", [1216, 1272], ""),
        ruler("Edward I", [1272, 1307], ""),
        ruler("Edward II", [1307, 1327], ""),
        ruler("Edward III", [1327, 1377], ""),
        ruler("Richard II", [1377, 1399], ""),
        ruler("Henry IV", [1399, 1413], ""),
        ruler("Henry V", [1413, 1422], ""),
        ruler("Henry VI", [1422, 1461], ""),
        ruler("Edward IV", [1461, 1470], ""),
        ruler("Henry VI", [1470, 1471], ""),
        ruler("Edward IV", [1471, 1483], ""),
        ruler("Edward V", [1483, 1483], ""),
        ruler("Richard III", [1483, 1485], ""),
        ruler("Henry VII", [1485, 1509], ""),
        ruler("Henry VIII", [1509, 1547], ""),
        ruler("Edward VI", [1547, 1553], ""),
        ruler("Lady Jane Grey", [1553, 1553], ""),
        ruler("Mary I", [1553, 1558], ""),
        ruler("Philip II of Spain", [1554, 1558], ""),
        ruler("Elizabeth I", [1558, 1603], ""),
        ruler("James VI", [1603, 1625], ""),
        ruler("Charles I", [1625, 1653], ""),
        ruler("Oliver Cromwell", [1653, 1658], ""),
        ruler("Richard Cromwell", [1658, 1660], ""),
        ruler("Charles II", [1660, 1685], ""),
        ruler("James II", [1685, 1689], ""),
        ruler("William III", [1689, 1702], ""),
        ruler("Mary II", [1689, 1694], ""),
        ruler("Anne", [1702, 1707], ""),

        // British monarchs
        ruler("Anne, Queen of Great Britain|Anne", [1707, 1714 ], ""),
        ruler("George I of Great Britain|George I", [1714, 1727 ], ""),
        ruler("George II of Great Britain|George II", [1727, 1760 ], ""),
        ruler("George III of the United Kingdom|George III", [1760, 1820 ], ""),
        ruler("George IV of the United Kingdom|George IV", [1820, 1830 ], ""),
        ruler("William IV of the United Kingdom|William IV", [1830, 1837 ], ""),
        ruler("Queen Victoria|Victoria", [1837, 1901 ], ""),
        ruler("Edward VII", [1901, 1910 ], ""),
        ruler("George V", [1910, 1936 ], "George_V"),
        ruler("Edward VIII", [1936, 1936 ], "Edward_VIII"),
        ruler("George VI", [1936, 1952 ], "George_VI"),
        ruler("Elizabeth II", [1952, 2020], "Elizabeth_II")
    ]
}].map(t => ({
    ...t,
    region: "britain"
}));;
