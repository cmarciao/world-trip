import { City } from "./City";

export interface Continent {
    name: string;
    description: string;
    continentImgUrl: string;
    info: {
        quantityCountries: number;
        quantityLanguages: number;
        quantityCities: number;
    }
    cities: City[];
}