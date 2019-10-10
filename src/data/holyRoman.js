import { ruler } from './factory';

export const holyRomanEmpire = [{
    title: "Holy Roman Empire",
    date: [800, 1806],
    timeline: [
        ruler("Charles I", [800, 814], "Charlemagne"),
        ruler("Louis I", [814, 840], "Louis_the_Pious"),
        ruler("Lothair I", [823, 855], "Lothair_I"),
        ruler("Louis II", [855, 875], "Louis_II_of_Italy"),
        ruler("Charles II", [875, 877], "Charles_the_Bald"),
        ruler("Charles III", [881, 888], "Charles_the_Fat"),
        ruler("Guy I", [891, 894], "Guy_III_of_Spoleto"),
        ruler("Guy I", [892, 898], "Guy_III_of_Spoleto"),
        ruler("Arnulph", [896, 899], "Arnulf_of_Carinthia"),
        ruler("Louis II", [901, 905], "Louis_II_of_Italy"),
        ruler("Berengar I", [915, 924], "Berengar_I_of_Italy"),
        ruler("Otto I", [962, 973], "Otto_I,_Holy_Roman_Emperor"),
        ruler("Otto II", [967, 983], "Otto_II,_Holy_Roman_Emperor"),
        ruler("Otto III", [996, 1002], "Otto_III,_Holy_Roman_Emperor"),
        ruler("Henry II", [1014, 1024], "Henry_II,_Holy_Roman_Emperor"),
        ruler("Conrad II", [1027, 1039], "Conrad_II,_Holy_Roman_Emperor"),
        ruler("Henry III", [1046, 1056], "Henry_III,_Holy_Roman_Emperor"),
        ruler("Henry IV", [1056, 1106], "Henry_IV,_Holy_Roman_Emperor"),
        ruler("Henry V", [1111, 1125], "Henry_V,_Holy_Roman_Emperor"),
        ruler("Lothair II", [1133, 1137], "Lothair_II,_Holy_Roman_Emperor"),
        ruler("Frederick I", [1155, 1190], "Frederick_I,_Holy_Roman_Emperor"),
        ruler("Henry VI", [1191, 1197], "Henry_VI,_Holy_Roman_Emperor"),
        ruler("Otto IV", [1198, 1214], "Otto_IV,_Holy_Roman_Emperor"),
        ruler("Frederick II", [1220, 1250], "Frederick_II,_Holy_Roman_Emperor"),
        ruler("Frederick III", [1440, 1493], "Frederick_III,_Holy_Roman_Emperor"),
        ruler("Maximilian I", [1493, 1519], "Maximilian_I,_Holy_Roman_Emperor"),
        ruler("Charles V", [1519, 1556], "Charles_V,_Holy_Roman_Emperor"),
        ruler("Ferdinand I", [1556, 1564], "Ferdinand_I,_Holy_Roman_Emperor"),
        ruler("Maximilian II", [1564, 1576], "Maximilian_II,_Holy_Roman_Emperor"),
        ruler("Rudolph II", [1576, 1612], "Rudolf_II,_Holy_Roman_Emperor"),
        ruler("Matthias", [1612, 1619], "Matthias,_Holy_Roman_Emperor"),
        ruler("Ferdinand II", [1619, 1637], "Ferdinand_II,_Holy_Roman_Emperor"),
        ruler("Ferdinand III", [1637, 1657], "Ferdinand_III,_Holy_Roman_Emperor"),
        ruler("Leopold I", [1658, 1705], "Leopold_I,_Holy_Roman_Emperor"),
        ruler("Joseph I", [1705, 1711], "Joseph_I,_Holy_Roman_Emperor"),
        ruler("Charles VI", [1711, 1740], "Charles_VI,_Holy_Roman_Emperor"),
        ruler("Charles VII", [1742, 1745], "Charles_VII,_Holy_Roman_Emperor"),
        ruler("Francis I", [1745, 1765], "Francis_I,_Holy_Roman_Emperor"),
        ruler("Joseph II", [1765, 1790], "Joseph_II,_Holy_Roman_Emperor"),
        ruler("Leopold II", [1790, 1792], "Leopold_II,_Holy_Roman_Emperor"),
        ruler("Francis II", [1792, 1806], "Francis_II,_Holy_Roman_Emperor")
    ]
}].map(t => ({
    ...t,
    regions: ["germany", "europe"]
}));


