import { ManType } from "./Destructuring";


let props: ManType;
beforeEach(() => {
    props = {
        name: "Aidar",
        age: 23,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        address: {
            street: {
                title: "Erkindik street"
            }
        }
    };
})



test("", () => {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street


    expect(age).toBe(23);
    expect(lessons.length).toBe(3);

    expect(title).toBe("Erkindik street")
})

test("aaa", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [, ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe("1");
    expect(l2.title).toBe("2");

//     expect(ls1.title).toBe("1");
//     expect(ls2.title).toBe("2");
    expect(ls2.title).toBe("2");
    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe("3");

})