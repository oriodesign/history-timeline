import { ruler, state, war, person, writer } from './factory';

export const middleEast = [{
    title: "Uruk period",
    wiki: "Uruk_period",
    date: [-4000, -3100],
    timeline: []
}, {
    title: "Jemdet Nasr period",
    wiki: "Jemdet_Nasr_period",
    date: [-3100, -2900],
    timeline: []
}, {
    title: "Early Dynastic Period",
    wiki: "Early_Dynastic_Period_(Mesopotamia)",
    date: [-2900, -2350],
    timeline: []
}, {
    title: "Gutian dynasty of Sumer",
    wiki: "Gutian_dynasty_of_Sumer",
    date: [-2135, -2055],
    timeline: []
}, {
    title: "Second Mariote Kingdom",
    wiki: "Mari,_Syria#The_second_kingdom",
    date: [-2500, -2290],
    timeline: []
}, {
    title: "Third Mariote Kingdom",
    wiki: "Mari,_Syria#The_third_kingdom",
    date: [-2226, -1761],
    timeline: []
}, {
    title: "Akkadian Empire",
    wiki: "Akkadian_Empire",
    date: [-2334, -2154],
    timeline: []
}, {
    title: "Early Period (Assyria)",
    wiki: "Early_Period_(Assyria)",
    date: [-2600, -2025],
    timeline: []
}, {
    title: "Neo Sumerian Empire",
    wiki: "Third_Dynasty_of_Ur",
    date: [-2112, -2004],
    timeline: []
}, {
    title: "Neo Babylonian Empire",
    wiki: "Neo-Babylonian_Empire",
    date: [-626, -539],
    timeline: []
}, {
    title: "Old-Assyrian Empire",
    wiki: "Old_Assyrian_Empire",
    date: [-2025, -1378],
    timeline: []
}, {
    title: "First Babylonian Empire",
    wiki: "First_Babylonian_dynasty",
    date: [-1830, -1531],
    timeline: []
}, {
    title: "Kassite dynasty of the Babylonian Empire",
    wiki: "Kassites",
    date: [-1600, -1155],
    timeline: []
}, {
    title: "Middle-Assyrian Empire",
    wiki: "Middle_Assyrian_Empire",
    date: [-1392, -934],
    timeline: []
}, {
    title: "Neo-Assyrian Empire",
    wiki: "Neo-Assyrian_Empire",
    date: [-911, -609],
    timeline: []
}, {
    title: "Median Empire",
    wiki: "Median_Empire",
    date: [-678, -549],
    timeline: [
        ruler("Deioces", [-700, -647], "Deioces"),
        ruler("Astyages", [-647, -625], "Astyages"),
        ruler("Cyaxares", [-624, -585], "Cyaxares"),
        ruler("Astyages", [-585, -549], "Astyages"),
    ]
}, {
    title: "Achaemenid Empire",
    wiki: "Achaemenid_Empire",
    date: [-550, -329],
    timeline: [
        ruler("Cyrus the Great", [-559, -530], "Cyrus_the_Great"),
        ruler("Cambyses II", [-530, -522], "Cambyses_II"),
        ruler("Bardiya", [-522, -522], "Bardiya"),
        ruler("Darius I", [-522, -486], "Darius_I_of_Persia"),
        ruler("Xerxes I", [-485, -465], "Xerxes_I_of_Persia"),
        ruler("Artaxerxes I", [-465, -424], "Artaxerxes_I_of_Persia"),
        ruler("Xerxes II", [-424, -424], "Xerxes_II_of_Persia"),
        ruler("Darius II", [-424, -404], "Darius_II_of_Persia"),
        ruler("Artaxerxes II", [-404, -358], "Artaxerxes_II_of_Persia"),
        ruler("Artaxerxes III", [-358, -338], "Artaxerxes_III"),
        ruler("Artaxerxes IV", [-338, -336], "Arses_of_Persia"),
        ruler("Darius III", [-336, -330], "Darius_III_of_Persia"),
        ruler("Artaxerxes V", [-330, -329], "Bessus")
    ]
}, {
    title: "Greco-Bactrian Kingdom",
    wiki: "Greco-Bactrian_Kingdom",
    date: [-256, -125],
    timeline: []
}, {
    title: "Seleucid Empire",
    wiki: "Seleucid_Empire",
    date: [-312, -63],
    timeline: [
        ruler("Seleucus I Nicator", [-311, -281], "Seleucus_I_Nicator"),
        ruler("Antiochus I Soter", [-281, -261], "Antiochus_I_Soter"),
        ruler("Antiochus II Theos", [-261, -246], "Antiochus_II_Theos"),
        ruler("Seleucus II Callinicus", [-246, -225], "Seleucus_II_Callinicus"),
        ruler("Seleucus III Ceraunus", [-225, -223], "Seleucus_III_Ceraunus"),
        ruler("Antiochus III the Great", [-223, -187], "Antiochus_III_the_Great"),
        ruler("Seleucus IV Philopator", [-187, -175], "Seleucus_IV_Philopator"),
        ruler("Antiochus IV Epiphanes", [-175, -163], "Antiochus_IV_Epiphanes"),
        ruler("Antiochus V Eupator", [-163, -161], "Antiochus_V_Eupator"),
        ruler("Demetrius I Soter", [-161, -150], "Demetrius_I_Soter"),
        ruler("Alexander Balas", [-150, -146], "Alexander_Balas"),
        ruler("Demetrius II Nicator", [-146, -139], "Demetrius_II_Nicator"),
        ruler("Antiochus VI Dionysus", [-145, -142], "Antiochus_VI_Dionysus"),
        ruler("Antiochus VII Sidetes", [-139, -129], "Antiochus_VII_Sidetes")
    ]
}, {
    title: "Parthian Empire",
    wiki: "Parthian_Empire",
    date: [-247, 224],
    timeline: [
        ruler("Arsaces I", [-247, -211], "Arsaces_I_of_Parthia"),
        ruler("Arsaces II", [-211, -185], "Arsaces_II_of_Parthia"),
        ruler("Arsaces III", [-185, -170], ""),
        ruler("Arsaces IV", [-170, -167], ""),
        ruler("Arsaces V", [-167, -132], ""),
        ruler("Arsaces VI", [-132, -127], ""),
        ruler("Arsaces VII", [-127, -126], ""),
        ruler("Arsaces VIII", [-126, -122], ""),
        ruler("Arsaces IX", [-122, -121], ""),
        ruler("Arsaces X", [-121, -91], ""),
        ruler("Arsaces XI", [-91, -87], ""),
        ruler("Arsaces XII", [-91, -77], ""),
        ruler("Arsaces XIII", [-88, -67], ""),
        ruler("Arsaces XIV", [-80, -75], ""),
        ruler("Arsaces XV", [-77, -70], ""),
        ruler("Arsaces XVII", [-70, -57], ""),
        ruler("Arsaces XIX", [-65, -54], ""),
        ruler("Arsaces XX", [-57, -38], ""),
        ruler("Arsaces XXI", [-50, -38], ""),
        ruler("Arsaces XXII", [-38, -2], ""),
        ruler("Arsaces XXIII", [-30, -25], ""),
        ruler("Arsaces XXIV", [-12, -9], ""),
        ruler("Musa", [-2, 4], ""),
        ruler("Arsaces XXV", [-2, 4], ""),
        ruler("Arsaces XXVI", [4, 6], ""),
        ruler("Arsaces XXVII", [8, 12], ""),
        ruler("Arsaces XXVIII", [10, 40], ""),
        ruler("Arsaces XXIX", [35, 36], ""),
        ruler("Arsaces XXX", [37, 40], ""),
        ruler("Arsaces XXXI", [40, 51], ""),
        ruler("Arsaces XXXII", [40, 46], ""),
        ruler("Arsaces XXXIII", [45, 51], ""),
        ruler("Arsaces XXXIV", [49, 50], ""),
        ruler("Arsaces XXXV", [51, 77], ""),
        ruler("Arsaces XXXVI", [55, 58], ""),
        ruler("Arsaces XXXVII", [77, 89], ""),
        ruler("Arsaces XXXVIII", [77, 115], ""),
        ruler("Arsaces XXXIX", [80, 81], ""),
        ruler("Arsaces XL", [89, 130], ""),
        ruler("Arsaces XLI", [105, 148], ""),
        ruler("Arsaces XLII", [116, 117], ""),
        ruler("Arsaces XLIII", [130, 145], ""),
        ruler("Arsaces XLV", [148, 191], ""),
        ruler("Arsaces XLVI", [191, 208], ""),
        ruler("Arsaces XLVII", [190, 195], ""),
        ruler("Arsaces XLVIII", [208, 228], ""),
        ruler("Arsaces XLIX", [213, 226], ""),
        ruler("Arsaces L", [217, 222], "")
    ]
}, {
    title: "Sasanian Empire",
    wiki: "Sasanian_Empire",
    date: [224, 651],
    timeline: []
},
state("Saffarid", [861, 1003], "Saffarid_dynasty"),
state("Samanid", [819, 999], "Samanid_Empire"),
state("Ghaznavids", [977, 1186], "Ghaznavids"),
state("Nizari Ismaili state", [1090, 1256], "Nizari_Ismaili_state", [
    war("Second Crusade", [1147, 1149], "Second_Crusade"),
]),
state("Seljuk_Empire", [1037, 1194], "Seljuk_Empire", [
    war("First Crusade", [1095, 1099], "First_Crusade"),
    war("Second Crusade", [1147, 1149], "Second_Crusade"),
    ruler("Nur ad-Din", [1146, 1174], "Nur_ad-Din_(died_1174)"),
]),
state("Ghurid Sultanate", [879, 1215], "Ghurid_dynasty"),
{
    title: "Rashidun Caliphate",
    wiki: "Rashidun_Caliphate",
    date: [632, 661],
    timeline: [
        ruler("Abu Bakr", [632, 634], "Abu_Bakr"),
        ruler("Umar", [634, 644], "Umar"),
        ruler("Uthman", [644, 656], "Uthman"),
        ruler("Ali", [656, 661], "Ali"),
    ]
}, {
    title: "Umayyad Caliphate",
    wiki: "Umayyad_Caliphate",
    date: [661, 750],
    timeline: [
        ruler("Muawiyah I", [661, 680], "Muawiyah_I"),
        ruler("Yazid I", [680, 683], "Yazid_I"),
        ruler("Muawiya II", [683, 684], "Muawiya_II"),
        ruler("Marwan I", [684, 685], "Marwan_I"),
        ruler("Abd_al-Malik ibn Marwan", [685, 705], "Abd_al-Malik_ibn_Marwan"),
        ruler("Al-Walid I", [705, 715], "Al-Walid_I"),
        ruler("Sulayman ibn Abd al-Malik", [715, 717], "Sulayman_ibn_Abd_al-Malik"),
        ruler("Umar II", [717, 720], "Umar_II"),
        ruler("Yazid II", [720, 724], "Yazid_II"),
        ruler("Hisham ibn Abd al-Malik", [724, 743], "Hisham_ibn_Abd_al-Malik"),
        ruler("Al-Walid_II", [743, 744], "Al-Walid_II"),
        ruler("Marwan II", [744, 750], "Marwan_II"),
    ]
}, {
    title: "Fatimid Caliphate",
    wiki: "Fatimid_Caliphate",
    date: [909, 1171],
    timeline: [
        war("First Crusade", [1095, 1099], "First_Crusade"),
        war("Second Crusade", [1147, 1149], "Second_Crusade"),
    ]
}, 
{
    title: "Ayyubid Sultanate",
    wiki: "Ayyubid_dynasty",
    date: [1171, 1260],
    timeline: [
        ruler("Saladin", [1174, 1193], "Saladin"),
    ]
},
{
    title: "Abbasid Caliphate",
    wiki: "Abbasid_Caliphate",
    date: [750, 1258],
    timeline: []
}, {
    title: "Mamluk Sultanate of Cairo",
    wiki: "Mamluk_Sultanate_(Cairo)",
    date: [1250, 1517],
    timeline: []
},{
    title: "Kingdom of Jerusalem",
    wiki: "Kingdom_of_Jerusalem",
    date: [1099, 1291],
    timeline: [
        ruler("Godfrey", [1099, 1100], "Godfrey_of_Bouillon"),
        ruler("Baldwin I", [1100, 1118], "Baldwin_I_of_Jerusalem"),
        ruler("Baldwin II", [1118, 1131], "Baldwin_II_of_Jerusalem"),
        ruler("Melisende", [1118, 1131], "Melisende,_Queen_of_Jerusalem"),
        ruler("Fulk", [1131, 1143], "Fulk,_King_of_Jerusalem"),
        ruler("Baldwin_III", [1143, 1163], "Baldwin_III_of_Jerusalem"),
        ruler("Amalric", [1163, 1174], "Amalric_of_Jerusalem"),
        ruler("Baldwin_IV", [1174, 1185], "Baldwin_IV_of_Jerusalem"),
        ruler("Baldwin_V", [1185, 1186], "Baldwin_V_of_Jerusalem"),
        ruler("Sibylla", [1186, 1190], "Sibylla,_Queen_of_Jerusalem"),
        ruler("Guy of Lusignan", [1186, 1192], "Guy_of_Lusignan"),

        writer("William of Tyre", [1130, 1186], "William_of_Tyre")
    ]
},
{
    title: "Principality of Antioch",
    wiki: "Principality_of_Antioch",
    date: [1098, 1268],
    timeline: []
},
{
    title: "County of Tripoli",
    wiki: "County_of_Tripoli",
    date: [1098, 1298],
    timeline: []
},
{
    title: "County of Edessa",
    wiki: "County_of_Edessa",
    date: [1098, 1144],
    timeline: []
},
{
    title: "Ottoman Empire",
    wiki: "Ottoman_Empire",
    date: [1299, 1922],
    timeline: [
        ruler("Suleiman the magnificient", [1520, 1566], "Suleiman_the_Magnificent"),
    ]
}

].map(t => ({
    ...t,
    regions: ["Middle-East"]
}));