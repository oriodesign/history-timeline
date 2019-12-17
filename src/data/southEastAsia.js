import { state } from './factory';

export const southEastAsia = [
    state("Srivijaya", [650, 1377], "Srivijaya"),
    state("Dark ages of Cambodia", [1431, 1863], "Khmer_Empire"),
    state("Khmer Empire", [802, 1431], "Khmer_Empire"),
    state("French Protectorate of Cambodia", [1863, 1953], "French_Protectorate_of_Cambodia"),
    state("Kingdom of Cambodia", [1953, 1970], "Kingdom_of_Cambodia_(1953–1970)"),
    state("Khmer Republic", [1970, 1975], "Khmer_Republic"),
    state("Democratic Kampuchea", [1975, 1979], "Democratic_Kampuchea"),
    state("PRK", [1979, 1989], "People%27s_Republic_of_Kampuchea"),
    state("CGDK", [1982, 1993], "Coalition_Government_of_Democratic_Kampuchea"),
    state("PGNUNSC", [1994, 1998], "Provisional_Government_of_National_Union_and_National_Salvation_of_Cambodia"),
    state("Cambodia", [1998, 2020], "Cambodia"),
].map(t => ({
    ...t,
    regions: ["south east asia"]
}));;
