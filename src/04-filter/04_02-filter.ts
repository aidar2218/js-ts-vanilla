import {CityType} from "../02-objects/02-02-objects";

export const demosishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}