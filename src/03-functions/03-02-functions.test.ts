import {CityType} from "../02-objects/02-02-objects";
import {addMoneyToBudget, createMessage, repaireHouse, toFireStaff, toHireStaff} from "./03-functions";


let cityForFunc: CityType;

beforeEach(() => {
    cityForFunc = {
        title: "Tokmok",
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

test("Budget should be changed for hospital", () => {
    addMoneyToBudget(cityForFunc.governmentBuildings[0], 700000);

    expect(cityForFunc.governmentBuildings[0].budget).toBe(900000);
})

test("Budget should be changed for fire-station", () => {
    addMoneyToBudget(cityForFunc.governmentBuildings[1], -50000);

    expect(cityForFunc.governmentBuildings[1].budget).toBe(450000);
})

test("house should be repaired", () => {
    repaireHouse(cityForFunc.houses[0]);

    expect(cityForFunc.houses[0].repaired).toBe(true);
})

test("staff should be increased", () => {
    toFireStaff(cityForFunc.governmentBuildings[0], 40);

    expect(cityForFunc.governmentBuildings[0].staffCount).toBe(160);
});

test("staff should be ++", () => {
    toHireStaff(cityForFunc.governmentBuildings[1], 80);

    expect(cityForFunc.governmentBuildings[1].staffCount).toBe(1080);
});

test("greeting message should be correct for citizens", () => {
    const message = createMessage(cityForFunc);

    expect(message).toBe("Hello Tokmok citizens. I want you be happy. All 1000000 person");
})