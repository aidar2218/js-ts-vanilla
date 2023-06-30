import {createGreetingMessages, ManType} from "./05-map";

let people: ManType[] = [];

beforeEach(() => {
    people = [
        {name: "Aidar Ibraev", age: 23},
        {name: "Agbar Anvarbekov", age: 23},
        {name: "Baizak Askarov", age: 23},
    ]
});

test("should get array of greeting messages", () => {
    const messages = createGreetingMessages(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Aidar! Welcome to Kyrgyzstan!");
    expect(messages[1]).toBe("Hello Agbar! Welcome to Kyrgyzstan!");
    expect(messages[2]).toBe("Hello Baizak! Welcome to Kyrgyzstan!");
});