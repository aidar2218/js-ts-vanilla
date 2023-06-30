import {GovernmentBuildingsType, HouseType} from "../02-objects/02-02-objects";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType[]) => {
    return buildings.map(b => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(h => h.address.street.title);
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(h => `Hello from ${h.address.street.title}`);
}