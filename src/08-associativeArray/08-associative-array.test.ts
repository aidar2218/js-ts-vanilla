type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType = {
}

beforeEach(() => {
    users = {
        "101": {id: 101, name: "Dimych"},
        "34235": {id: 34235, name: "Natasha"},
        "678967": {id: 678967, name: "Valera"},
        "2": {id: 2, name: "Katya"},
    }
})

test("should update corresponding user from obj", () => {
    users["2"].name = "Ekaterina"

    expect(users["2"].name).toBe("Ekaterina");
})