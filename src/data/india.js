import { period, person, writer, ruler } from './factory';

export const indusValley = {
    title: "Indus Valley Civilisation",
    wiki: "Indus_Valley_Civilisation",
    date: [-3300, -1300],
    timeline: []
};

export const vedicPeriod = {
    title: "Vedic Period (India)",
    wiki: "Vedic_period",
    date: [-1500, -500],
    timeline: []
};

export const mahajanapadas = {
    title: "Mahajanapadas (India)",
    wiki: "Mahajanapadas",
    date: [-600, -345],
    timeline: [
        person("Gautama Buddha", [-563,-480], "Gautama_Buddha")
    ]
};

export const maurya = {
    title: "Maurya Empire (India)",
    wiki: "Maurya_Empire",
    date: [-321, -185],
    timeline: [
        ruler("Chandragupta Maurya", [-321,-297], "Chandragupta_Maurya"),
        writer("Chanakya", [-321,-297], "Chanakya"),
        ruler("Ashoka", [-268,-232], "Ashoka"),
        ruler("Patanjali", [-200,-180], "Patanjali")
    ]
};

export const india = {
    title: "India",
    date: [-300, 2020],
    timeline: [
        writer("Aśvaghoṣa", [80, 150], "Aśvaghoṣa"),
        writer("Kālidāsa", [300, 400], "Kālidāsa"),
        period("Chola Empire", [-300, 1279], "Chola_dynasty"),
        period("Pandya Empire", [-300, 1650], "Pandya_dynasty"),
        period("Gupta Empire", [250, 543], "Gupta_Empire"),
        period("Pallava Empire", [275, 897], "Pallava_dynasty"),
        period("Chalukya Empire", [543, 753], "Chalukya_dynasty"),
        period("Pala Empire", [750, 1150], "Pala_Empire"),
        period("Rashtrakuta Empire", [753, 982], "Rashtrakuta_dynasty"),
        period("Gurjara-Pratihara Empire", [950, 1036], "Gurjara-Pratihara_dynasty"),
        period("Western Chalukya Empire", [973, 1189], "Western_Chalukya_Empire"),
        period("Delhi Sultanate", [1206, 1526], "Delhi_Sultanate"),
        period("Vijayanagara Empire", [1336, 1646], "Vijayanagara_Empire"),
        period("Mughal Empire", [1526, 1857], "Mughal_Empire"),
        period("Maratha Empire", [1674, 1818], "Maratha_Empire"),
        period("Sikh Empire", [1799, 1849], "Sikh_Empire"),
        period("East India Company", [1757, 1858], "Company_rule_in_India"),
        period("British Raj", [1858, 1947], "British_Raj"),
        period("Dominion of India", [1947, 1950], "Dominion_of_India"),
        period("Republic of India", [1950, 2020], "India"),
    ]
};
