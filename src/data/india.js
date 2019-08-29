import { monument, person, writer, ruler, state } from './factory';

export const india = [{
    title: "Indus Valley Civilisation",
    wiki: "Indus_Valley_Civilisation",
    date: [-3300, -1300],
    timeline: []
}, {
    title: "Vedic Period (India)",
    wiki: "Vedic_period",
    date: [-1500, -500],
    timeline: []
}, {
    title: "Mahajanapadas (India)",
    wiki: "Mahajanapadas",
    date: [-600, -345],
    timeline: [
        person("Gautama Buddha", [-563, -480], "Gautama_Buddha")
    ]
}, {
    title: "Maurya Empire (India)",
    wiki: "Maurya_Empire",
    date: [-321, -185],
    timeline: [
        ruler("Chandragupta Maurya", [-321, -297], "Chandragupta_Maurya"),
        writer("Chanakya", [-321, -297], "Chanakya"),
        ruler("Ashoka", [-268, -232], "Ashoka"),
        ruler("Patanjali", [-200, -180], "Patanjali")
    ]
}, {
    title: "Shunga Empire (India)",
    wiki: "Shunga_Empire",
    date: [-185, -75],
    timeline: [
    ]
}, {
    title: "Satavahana Empire (India)",
    wiki: "Satavahana_dynasty",
    date: [-100, 200],
    timeline: [
    ]
}, {
    title: "Western Satraps (India)",
    wiki: "Western_Satraps",
    date: [-35, 405],
    timeline: [
    ]
}, {
    title: "Kushan Empire",
    wiki: "Kushan_Empire",
    date: [30, 375],
    timeline: [
        writer("Aśvaghoṣa", [80, 150], "Aśvaghoṣa"),
        writer("Vātsyāyana", [150, 200], "Vātsyāyana"),
        ruler("Vima Kadphises", [90, 100], "Vima_Kadphises"),
        ruler("Kanishka", [127, 150], "Kanishka"),
        ruler("Huvishka", [150, 180], "Vāsishka"),
        ruler("Vasudeva_I", [180, 232], "Vasudeva_I"),
        ruler("Vāsishka", [247, 265], "Vāsishka")
    ]
}, {
    title: "Gupta Empire (Golden Age of India)",
    wiki: "Gupta_Empire",
    date: [250, 543],
    timeline: [

        monument("Iron pillar of Delhi", [402, 410], "Konark_Sun_Temple"),

        ruler("Gupta", [250, 290], "Gupta_(king)"),
        ruler("Ghatotkacha", [290, 319], ""),
        ruler("Chandragupta I ", [319, 350], "Chandragupta_I"),
        ruler("Samudragupta ", [350, 375], "Samudragupta"),
        ruler("Chandragupta II ", [375, 415], "Chandragupta_II"),
        ruler("Kumaragupta I", [415, 455], "Kumaragupta_I"),
        ruler("Skandagupta", [455, 467], "Skandagupta"),
        ruler("Purugupta", [467, 473], "Purugupta"),
        ruler("Kumaragupta II", [473, 476], "Kumaragupta_II"),
        ruler("Budhagupta", [476, 495], "Budhagupta"),
        ruler("Narasimhagupta", [495, 530], "Narasimhagupta"),
        ruler("Kumaragupta III", [530, 540], "Kumaragupta_III"),
        ruler("Vishnugupta", [540, 543], "Vishnugupta_(Gupta_Empire)"),
        writer("Kālidāsa", [360, 400], "Kālidāsa"),
    ]
}, state("Harsha Empire", [606, 647], "Harsha"),
{
    title: "Chola Empire (South India)",
    wiki: "Medieval_Cholas",
    date: [848, 1070],
    timeline: [
        ruler("Vijayalaya", [848, 891], "Vijayalaya_Chola"),
        ruler("Aditya I	", [891, 907], "Aditya_I"),
        ruler("Parantaka I", [907, 950], "Parantaka_I"),
        ruler("Gandaraditya", [950, 957], "Gandaraditya"),
        ruler("Arinjaya", [956, 957], "Arinjaya_Chola"),
        ruler("Sundara (Parantaka II)", [957, 970], "Parantaka_Chola_II"),
        ruler("Uttama", [970, 985], "Uttama_Chola"),
        ruler("Rajaraja I", [985, 1014], "Rajaraja_I"),
        ruler("Rajendra I", [1012, 1044], "Rajendra_Chola_I"),
        ruler("Rajadhiraja", [1044, 1054], "Rajadhiraja_Chola"),
        ruler("Rajendra II", [1054, 1063], "Rajendra_Chola_II"),
        ruler("Virarajendra", [1063, 1070], "Virarajendra_Chola"),
        ruler("Athirajendra", [1070, 1070], "Athirajendra_Chola"),
    ]
}, {
    title: "Rashtrakuta Empire (India)",
    wiki: "Rashtrakuta_dynasty",
    date: [753, 982],
    timeline: [
    ]
}, {
    title: "Pala Empire (India)",
    wiki: "Pala_Empire",
    date: [750, 1150],
    timeline: [
    ]
}, {
    title: "Gurjara-Pratihara Empire (India)",
    wiki: "Gurjara-Pratihara_dynasty",
    date: [950, 1036],
    timeline: [
    ]
},

state("Eastern Ganga dinasty", [1078, 1434], "Eastern_Ganga_dynasty", [
    monument("Konark Sun Temple", [1250, 1260], "Konark_Sun_Temple")
]),

state("Western Chalukya Empire", [973, 1189], "Western_Chalukya_Empire"),

state("Delhi Sultanate", [1206, 1526], "Delhi_Sultanate", [
    monument("Qutb Minar", [1192, 1220], "Qutb_Minar")
]),
state("Vijayanagara Empire", [1336, 1646], "Vijayanagara_Empire"),

state("Mughal Empire", [1526, 1857], "Mughal_Empire", [
    monument("Taj Mahal", [1632, 1643], "Taj_Mahal"),
    ruler("Bābur", [1526, 1530], "Babur"),
    ruler("Humayun", [1530, 1540], "Humayun"),
    ruler("Akbar-i-Azam ", [1556, 1605], "Akbar"),
    ruler("Jahangir", [1605, 1627], "Jahangir"),
    ruler("Shah-Jahan-i-Azam", [1627, 1658], "Shah_Jahan"),
    ruler("Alamgir I", [1658, 1707], "Aurangzeb"),
    ruler("Bahadur Shah ", [1708, 1712], "Bahadur_Shah_I"),
    ruler("Jahandar Shah", [1712, 1713], "Jahandar_Shah"),
    ruler("Farrukhsiyar", [1713, 1719], "Farrukhsiyar"),
    ruler("Rafi ud-Darajat", [1719, 1719], "Rafi_ud-Darajat"),
    ruler("Rafi ud-Daulah", [1719, 1719], "Shah_Jahan_II"),
    ruler("Muhammad Shah", [1719, 1748], "Muhammad_Shah"),
    ruler("Ahmad Shah Bahadur", [1748, 1754], "Ahmad_Shah_Bahadur"),
    ruler("Alamgir II", [1754, 1759], "Alamgir_II"),
    ruler("Shah Jahan III", [1759, 1760], "Shah_Jahan_III"),
    ruler("Shah Alam II", [1759, 1806], "Shah_Alam_II"),
    ruler("Muhammad Shah Bahadur", [1788, 1788], "Mahmud_Shah_Bahadur"),
    ruler("Akbar Shah II", [1806, 1837], "Akbar_Shah_II"),
    ruler("Bahadur Shah II", [1837, 1857], "Bahadur_Shah_II")
]),
state("Sur Empire", [1540, 1556], "Sur_Empire", [
    ruler("Sher Shah Suri", [1540, 1545], "Sher_Shah_Suri"),
]),
state("Bijapur sultanate", [1490, 1686], "Adil_Shahi_dynasty"),
state("Golconda sultanate", [1518, 1687], "Qutb_Shahi_dynasty", [
    monument("Charminar", [1591, 1592], "Charminar")
]),
state("Maratha Empire", [1674, 1818], "Maratha_Empire", [
    ruler("Shivaji I", [1674, 1680], "Shivaji"),
    ruler("Sambhaji", [1680, 1689], "Sambhaji"),
    ruler("Rajaram I", [1689, 1700], "Rajaram_I"),
    ruler("Shivaji II", [1700, 1708], "Shivaji"),
    ruler("Shahu I", [1708, 1748], "Shahu_I"),
]),
state("Sikh Empire", [1799, 1849], "Sikh_Empire"),
state("East India Company", [1757, 1858], "Company_rule_in_India"),
state("British Raj", [1858, 1947], "British_Raj"),
state("Dominion of India", [1947, 1950], "Dominion_of_India"),
state("Republic of India", [1950, 2020], "India"),
state("First Pandya Empire", [590, 920], "Pandya_dynasty"),
state("Second Pandya Empire", [1212, 1345], "Pandya_dynasty"),
state("Pallava Empire", [275, 897], "Pallava_dynasty"),
state("Chalukya Empire", [543, 753], "Chalukya_dynasty")
].map(t => ({
    ...t,
    region: "india"
}));
