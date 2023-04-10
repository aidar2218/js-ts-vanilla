import {StudentType} from "../02-objects/02-objects";
import {addSkill} from "./03-functions";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Aidar",
        age: 32,
        isActive: true,
        address: {
            streetTitle: "1-mcr",
            city: {
                title: "Bishkek",
                countryTitle: "Kyrgyz Republic"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "JS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
}

test("new tech skill should be added to student", ()=> {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()

})