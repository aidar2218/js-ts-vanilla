
type UserType = {
    name: string
    age: number
}

function increaseAge(u: UserType) {
    u.age++;
}


test("reference type test", () => {

    let user: UserType = {
        name: "Aidar",
        age: 23
    }

    increaseAge(user);


    expect(user.age).toBe(24);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);


})

test("array reference test", () => {

    let users = [
        {
            name: "Azim",
            age: 22
        },
        {
            name: "Baizak",
            age: 22
        }
    ];

    let admins = users;

    admins.push({name: "Agbar", age: 23});

    expect(users[2]).toEqual({name: "Agbar", age: 23});

});

test("value count test", () => {

    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = 101;

})

type UserType2 = {
    name: string
    age: number
    address: {
        title: string
    }
}

test("references type test", () => {

    let address = {
        title: "Tokmok"
    }

    let user: UserType2 = {
        name: "Aidar",
        age: 23,
        address: address
    }

    let addr = user.address

    let user2: UserType2 = {
        name: "blabla",
        age: 22,
        address: address
    }

    address.title = "Bishkek";

    expect(user.address).toBe(user2.address);
    expect(user.address.title).toBe("Bishkek");


})

test("references type array test", () => {

    let address = {
        title: "Tokmok"
    }

    let user: UserType2 = {
        name: "Aidar",
        age: 23,
        address: address
    }

    let user2: UserType2 = {
        name: "blabla",
        age: 22,
        address: address
    }

    const users = [
        user,
        user2,
        {
            name: "ulalalaa",
            age: 22,
            address: address
        }
    ]

    let admins = [user, user2];

    admins[0].name = "AIDAR";

    expect(users[0].name).toBe("AIDAR");
    expect(user.name).toBe("AIDAR");
})


test("sort array test", () => {
    const letters = ["t", "e", "p", "a", "r", "w"];

    function passpist (array: any) {
        const copy = [...letters].sort();
        console.log(copy);
    }

    passpist(letters);

    expect(letters).toEqual(["t", "e", "p", "a", "r", "w"]);


})
