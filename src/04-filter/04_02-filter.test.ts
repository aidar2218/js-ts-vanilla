import {CityType} from "../02-objects/02-02-objects";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_02-filter";

let cityF: CityType;

beforeEach(() => {
    cityF = {
        title: "New York",
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id: 2,
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
});



test('House should be destroyed', () => {
    demolishHousesOnTheStreet(cityF, 'Happy street');

    expect(cityF.houses.length).toBe(1);
    expect(cityF.houses[0].id).toBe(1);
});

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(cityF.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})