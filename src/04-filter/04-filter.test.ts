import {CourseType} from "./04-filter";

test("take men older then 90", () => {
    const ages = [22, 84, 34, 22, 35, 56, 72, 63];

    const oldMen = ages.filter(m => m > 70).sort();

    expect(oldMen.length).toBe(2);
    expect(oldMen[0]).toBe(72);
    expect(oldMen[1]).toBe(84);
});

test("take courses cheaper then $220", () => {
    const courses: CourseType[] = [
        {
            title: "html&css",
            price: 50
        },
        {
            title: "js",
            price: 110
        },
        {
            title: "react",
            price: 200
        },
        {
            title: "nodejs",
            price: 250
        }
    ];

    const cheapCourses = courses.filter(c => c.price < 220);

    expect(cheapCourses.length).toBe(3);
    expect(cheapCourses[0].price).toBe(50);
    expect(cheapCourses[1].price).toBe(110);
    expect(cheapCourses[2].price).toBe(200);
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Book", status: true},
        {id: 2, title: "Pencil", status: true},
        {id: 3, title: "Paper", status: false},
        {id: 4, title: "Laptop", status: true},
        {id: 5, title: "Monitor", status: false},
    ];

    const completedTasks = tasks.filter(t => t.status);

    expect(completedTasks.length).toBe(3);
    expect(completedTasks[0].title).toBe("Book");
    expect(completedTasks[1].title).toBe("Pencil");
    expect(completedTasks[2].title).toBe("Laptop");
});

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Book", status: true},
        {id: 2, title: "Pencil", status: true},
        {id: 3, title: "Paper", status: false},
        {id: 4, title: "Laptop", status: true},
        {id: 5, title: "Monitor", status: false},
    ];

    const uncompletedTasks = tasks.filter(t => !t.status);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe("Paper");
    expect(uncompletedTasks[1].title).toBe("Monitor");
});



