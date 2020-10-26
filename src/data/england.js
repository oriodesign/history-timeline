import { state, house, ruler, person, battle, war, book, composer } from './factory';

export const england = [
    state("Powys", [450, 1160], "Kingdom_of_Powys", [
        person("Nennius", [800, 850], "Nennius", '★'),
        book("Historia Brittonum", 828, "Historia_Brittonum"),
    ]),
    state("Gwynedd", [450, 1216], "Kingdom_of_Gwynedd", [

    ]),
    state("Dyfed", [410, 920], "Kingdom_of_Dyfed", [

    ]),
    state("Gwent", [450, 1075], "Kingdom_of_Gwent", [

    ]),
    state("Glywysing", [450, 1055], "Kingdom_of_Gwent", [
        person("Gildas", [500, 570], "Gildas", '★'),
        book("De Excidio et conquestu britanniae", 540, "De_Excidio_et_Conquestu_Britanniae"),
    ]),
    {
        title: "Wessex",
        wiki: "Indus_Valley_Civilisation",
        date: [519, 927],
        timeline: [
            ruler("Cerdic", [519, 534], "Cerdic_of_Wessex"),
            ruler("Ecgberht", [802, 839], "Ecgberht,_King_of_Wessex"),
            ruler("Æthelwulf", [839, 858], "Æthelwulf,_King_of_Wessex"),
            ruler("Alfred", [871, 899], "Alfred_the_Great", '★'),
            ruler("Edward", [899, 924], "Edward_the_Elder"),
            ruler("Æthelstan", [924, 927], "Æthelstan", '★'),
            ruler("Saint Boniface", [675, 754], "Saint_Boniface")
        ]
    },
    {
        title: "Sussex",
        wiki: "Kingdom_of_Sussex",
        date: [477, 860],
        timeline: [
            ruler("Ælle", [477, 491], "%C3%86lle_of_Sussex"),
            ruler("Cissa", [491, 495], "Cissa_of_Sussex"),
            ruler("Æthelwealh", [674, 682], "%C3%86thelwealh_of_Sussex"),
            ruler("Eadwulf", [683, 683], "Eadwulf"),
            ruler("Ecgwald", [683, 685], "/w/index.php?title=Ecgwald&action=edit&redlink=1"),
            ruler("Berthun", [685, 692], "Berthun_of_Sussex"),
            ruler("Nothhelm (Nunna)", [692, 714], "Nothhelm_of_Sussex"),
            ruler("Watt", [692, 700], "Watt_of_Sussex"),
            ruler("Bryni", [700, 710], "Bryni_of_Sussex"),
            ruler("Osric", [710, 714], "Osric_of_Sussex"),
            ruler("Æthelstan", [714, 740], "%C3%86thelstan_of_Sussex"),
            ruler("Æthelberht", [740, 772], "%C3%86thelbert_of_Sussex"),
            ruler("Oswald", [772, 760], "Oswald_of_Sussex"),
            ruler("Osmund", [760, 765], "Osmund_of_Sussex"),
            ruler("Oslac", [765, 780], "Oslac_of_Sussex"),
            ruler("Ælfwald", [765, 772], "Aelfwald_of_Sussex"),
            ruler("Ealdwulf", [765, 791], "Ealdwulf_of_Sussex")
        ]
    },
    {
        title: "Essex",
        wiki: "Kingdom_of_Essex",
        date: [527, 825],
        timeline: [
            ruler("Æscwine", [527, 587], "%C3%86scwine_of_Essex"),
            ruler("Sledd", [587, 604], "Sledd_of_Essex"),
            ruler("Sæberht", [604, 616], "S%C3%A6berht_of_Essex"),
            ruler("Sexred", [616, 623], "Sexred_of_Essex"),
            ruler("Saeward", [616, 623], "Saeward_of_Essex"),
            ruler("Sigeberht the Little", [623, 653], "Sigeberht_the_Little"),
            ruler("Sigeberht the Good", [653, 660], "Sigeberht_the_Good"),
            ruler("Swithhelm", [660, 664], "Swithhelm_of_Essex"),
            ruler("Sighere", [664, 683], "Sighere_of_Essex"),
            ruler("Sæbbi", [683, 694], "S%C3%A6bbi_of_Essex"),
            ruler("Sigeheard", [694, 709], "Sigeheard_of_Essex"),
            ruler("Swæfred", [695, 709], "Sw%C3%A6fred_of_Essex"),
            ruler("Offa", [709, 709], "Offa_of_Essex"),
            ruler("Saelred", [709, 746], "Saelred_of_Essex"),
            ruler("Swæfbert", [715, 738], "Sw%C3%A6fbert_of_Essex"),
            ruler("Swithred", [746, 758], "Swithred_of_Essex"),
            ruler("Sigeric", [758, 798], "Sigeric_of_Essex"),
            ruler("Sigered", [798, 825], "Sigered_of_Essex")
        ]
    },
    {
        title: "East Anglia",
        wiki: "Kingdom_of_East_Anglia",
        date: [550, 918],
        timeline: []
    },
    {
        title: "Kent",
        date: [455, 871],
        timeline: [
            ruler("Hengest", [455, 488], "Hengest"),
            ruler("Horsa", [455, 488], "Horsa"),
            ruler("Oisc", [488, 512], "Oisc_of_Kent"),
            ruler("Octa", [512, 534], "Octa_of_Kent"),
            ruler("Eormenric", [534, 590], "Eormenric_of_Kent"),
            ruler("Æðelberht I", [590, 616], "%C3%86thelberht_of_Kent"),
            ruler("Eadbald", [616, 640], "Eadbald_of_Kent"),
            ruler("Æðelwald", [640, 640], ""),
            ruler("Eorcenberht", [640, 664], "Eorcenberht_of_Kent"),
            ruler("Eormenred", [664, 664], "Eormenred_of_Kent"),
            ruler("Ecgberht I", [664, 673], "Ecgberht_of_Kent"),
            ruler("Hlothhere", [674, 685], "Hlothhere_of_Kent"),
            ruler("Eadric", [685, 686], "Eadric_of_Kent"),
            ruler("Mul", [686, 687], "Mul_of_Kent"),
            ruler("Swæfheard", [687, 692], "Sw%C3%A6fheard"),
            ruler("Swæfberht", [689, 690], "Sw%C3%A6fberht"),
            ruler("Oswine", [689, 690], "Oswine_of_Kent"),
            ruler("Wihtred", [693, 725], "Wihtred_of_Kent"),
            ruler("Alric", [725, 725], "Alric_of_Kent"),
            ruler("Eadberht I", [725, 748], "Eadbert_I_of_Kent"),
            ruler("Æðelberht II", [748, 762], "%C3%86thelbert_II_of_Kent"),
            ruler("Eardwulf", [762, 762], "Eardwulf_of_Kent"),
            ruler("Eadberht II", [762, 762], "Eadberht_II"),
            ruler("Sigered", [762, 762], "Sigered_of_Kent"),
            ruler("Eanmund", [762, 762], "Eanmund_of_Kent"),
            ruler("Heaberht", [764, 765], "Heaberht_of_Kent"),
            ruler("Ecgberht II", [765, 779], "Egbert_II_of_Kent"),
            ruler("Ealhmund", [784, 796], "Ealhmund_of_Kent"),
            ruler("Eadberht III Præn", [796, 798], "Eadberht_III_Pr%C3%A6n"),
            ruler("Cuðred", [798, 807], "Cuthred_of_Kent"),
            ruler("Cœnwulf", [809, 822], "Coenwulf_of_Mercia"),
            ruler("Ceolwulf", [822, 823], "Ceolwulf_I_of_Mercia"),
            ruler("Baldred", [825, 825], "Baldred_of_Kent"),
            ruler("Ecgberht III", [825, 839], "Egbert_of_Wessex"),
            ruler("Æðelwulf", [825, 858], "Ethelwulf_of_Wessex"),
            ruler("Æðelstan I", [839, 851], "%C3%86%C3%B0elstan_I"),
            ruler("Æðelberht III", [855, 866], "Ethelbert_of_Wessex"),
            ruler("Æðelred I", [866, 871], "Ethelred_of_Wessex")
        ]
    },
    {
        title: "Mercia",
        date: [527, 918],
        timeline: [
            ruler("Penda", [626, 655], "Penda_of_Mercia"),
            ruler("Ethelbald", [716, 757], "Æthelbald_of_Mercia"),
            ruler("Offa", [757, 796], "Offa_of_Mercia", '★'),
            ruler("Coenwulf", [796, 821], "Coenwulf_of_Mercia"),
            ruler("Bernwulf", [823, 826], "Beornwulf_of_Mercia"),
            ruler("Æthelred", [881, 911], "Æthelred,_Lord_of_the_Mercians"),
            ruler("Ætheld", [911, 918], "Ætheld"),
            ruler("Ælfwynn", [918, 918], "Ælfwynn"),
        ]
    },
    {
        title: "Northumbria",
        wiki: "Kingdom_of_Northumbria",
        date: [593, 954],
        timeline: [
            battle("Ivar the Boneless sacks york", 865),
            person("Cuthbert", [634, 687], "Cuthbert"),
            person("Bede", [673, 735], "Bede", '★'),
            book("Ecclesiastical History", 731, "Ecclesiastical_History_of_the_English_People"),
            book("Lindisfarne Gospels", 715, "Lindisfarne_Gospels"),
            ruler("Oswald", [634, 642], "Oswald_of_Northumbria", '★'),
            ruler("Oswiu", [642, 670], "Oswiu"),
            person("Alcuin", [735, 804], "Alcuin")
        ]
    },
    {
        title: "England",
        date: [927, 2020],
        timeline: [
            // Battles
            war("Hastings", [1066], "Battle_of_Hastings"),

            // War
            war("Third Crusade", [1189, 1192], "Third_Crusade"),
            war("Barons%27_Crusade", [1239, 1241], "Barons%27_Crusade"),
            war("Ninth Crusade", [1271, 1272], "Ninth_Crusade"),

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

            // bishops
            person("Dunstan", [927, 988], "Dunstan"),

            // Kings
            ruler("Æthelstan", [927, 939], "Æthelstan", '★'),
            ruler("Edmund I", [939, 946], "Edmund_I"),
            ruler("Eadred", [946, 955], "Eadred"),
            ruler("Eadwig", [955, 959], "Eadwig"),
            ruler("Edgar the Peaceful", [959, 975], "Edgar_the_Peaceful"),
            ruler("Edward the Martyr", [975, 978], "Edward_the_Martyr"),
            ruler("Æthelred the Unready", [978, 1013], "Æthelred_the_Unready", '★'),
            ruler("Sweyn Forkbeard", [1013, 1014], "Sweyn_Forkbeard"),
            ruler("Æthelred the Unready", [1014, 1016], "Æthelred_the_Unready"),
            ruler("Edmund Ironside", [1016, 1016], "Edmund_Ironside"),
            ruler("Cnut the Great", [1016, 1035], "Cnut_the_Great"),
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
            ruler("Anne, Queen of Great Britain|Anne", [1707, 1714], ""),
            ruler("George I of Great Britain|George I", [1714, 1727], ""),
            ruler("George II of Great Britain|George II", [1727, 1760], ""),
            ruler("George III of the United Kingdom|George III", [1760, 1820], ""),
            ruler("George IV of the United Kingdom|George IV", [1820, 1830], ""),
            ruler("William IV of the United Kingdom|William IV", [1830, 1837], ""),
            ruler("Queen Victoria|Victoria", [1837, 1901], ""),
            ruler("Edward VII", [1901, 1910], ""),
            ruler("George V", [1910, 1936], "George_V"),
            ruler("Edward VIII", [1936, 1936], "Edward_VIII"),
            ruler("George VI", [1936, 1952], "George_VI"),
            ruler("Elizabeth II", [1952, 2020], "Elizabeth_II"),

            // Composer
            composer("Elgar", [1857, 1934], "Edward_Elgar"),
        ]
    }].map(t => ({
        ...t,
        regions: ["britain", "europe", "northern europe"]
    }));;
