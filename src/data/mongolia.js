import { state, ruler, group, battle } from './factory';

export const mongolia = group([
    state("Mongol Empire", [1206, 1368], "Mongol_Empire", [
        ruler("Genghis Khan", [1206, 1227], "Genghis_Khan", "★"),
        ruler("Ögedei Khan", [1229, 1241], "Ögedei_Khan"),
        ruler("Güyük Khan", [1246, 1248], "Güyük_Khan"),
        ruler("Möngke Khan", [1251, 1259], "Möngke_Khan"),
        ruler("Kublai Khan", [1260, 1294], "Kublai_Khan")
    ]),
    state("Chagatai Khanate", [1225, 1340], "Chagatai_Khanate", []),
    state("Chagatai Khanate West", [1340, 1370], "Chagatai_Khanate", []),
    state("Chagatai Khanate East", [1340, 1680], "Moghulistan", []),
    state("Golden Horde", [1240, 1502], "Golden_Horde", []),
    state("Ilkhanate", [1256, 1353], "Ilkhanate", [
        ruler("Hulagu Khan", [1256, 1265], "Hulagu_Khan"),
        battle("Siege of Baghdad", 1258, "Siege_of_Baghdad_(1258)")
    ]),
    state("Timurid Empire", [1370, 1507], "Timurid_Empire", [
        ruler("Timur", [1370, 1405], "Timur", "★")
    ]),
], ["mongolia", "Middle-East"]);