import {student, StudentType} from "../02-objects/02-objects";

export const sum = (a: number, b:number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}