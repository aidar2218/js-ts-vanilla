export type ManType = {
    name: string
    age: number
};

const people: ManType[] = [
    {name: "Aidar Ibraev", age: 23},
    {name: "Agbar Anvarbekov", age: 23},
    {name: "Baizak Askarov", age: 23},
];

const transformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
    }
};

const devs = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2]),
];

const devs2 = people.map(transformator);
const devs3 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}));

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome to Kyrgyzstan!`);

export const createGreetingMessages = (people: ManType[]) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome to Kyrgyzstan!`);
}