import {CityType, GovernmentBuildingsType} from "../02-objects/02-02-objects";

export const demolishHousesOnTheStreet = (c: CityType, street: string) => {
    c.houses = c.houses.filter(h => h.address.street.title !== street);
    return c;
}

export const getBuildingsWithStaffCountGreaterThen = (
    buildings: GovernmentBuildingsType[],
    sc: number
) => {
    return buildings.filter(b => b.staffCount > sc);
}