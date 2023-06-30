import { CityType } from "../02-objects/02-02-objects";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05-02-map";

let cityForMap: CityType;

beforeEach(() => {
    cityForMap = {
        title: "New York",
        houses: [
            {
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

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetNames = getStreetsTitlesOfGovernmentBuildings(cityForMap.governmentBuildings);

    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe("Central Str");
    expect(streetNames[1]).toBe("South Str");
});

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(cityForMap.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
});

test("create greeting messages for streets", () => {
    let messages = createMessages(cityForMap.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys and girls from White street");
    expect(messages[1]).toBe("Hello guys and girls from Happy street");
    expect(messages[2]).toBe("Hello guys and girls from Happy street");
});