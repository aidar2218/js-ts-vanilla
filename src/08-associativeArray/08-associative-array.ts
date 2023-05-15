export const usersObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    "101": {id: 101, name: "Dimych"},
    "34235": {id: 34235, name: "Natasha"},
    "678967": {id: 678967, name: "Valera"},
    "2": {id: 2, name: "Katya"},
}
// users[1]
let user = {id: 100500, name: "Igor"}
users[user.id] = user;
delete users[user.id];
users[user.id].name = "Vitya";

export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 34235, name: "Natasha"},
    {id: 678967, name: "Valera"},
    {id: 2, name: "Katya"},
];

// usersArray.find(u => u.id === 1)