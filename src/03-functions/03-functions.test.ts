import {StudentType} from "../02-objects/02-objects";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03-functions";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Aidar",
        age: 23,
        isActive: false,
        address: {
            street: "1-mkr",
            city: {
                title: "Tokmok",
                country: "Kyrgyzstan"
            }
        },
        technologies: [
            {
                id: 1,
                skill: "HTML"
            },
            {
                id: 2,
                skill: "CSS"
            },
            {
                id: 3,
                skill: "JS"
            },
            {
                id: 4,
                skill: "REACT"
            }
        ]
    };
});

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(4);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].skill).toBe("JS");
    expect(student.technologies[4].id).toBeDefined();
});

test("student should be active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
});

test("does student live in this city", () => {
    let result1 = doesStudentLiveInCity(student, "Bishkek");
    let result2 = doesStudentLiveInCity(student, "Tokmok");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})