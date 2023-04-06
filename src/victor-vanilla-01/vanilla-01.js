// примитивы:
// number, string, boolean, null, undefined, NaN, Infinity, BigInt, Symbol
// объекты:
// array, function, object

// 1. сложная структура
// 2. имеют свойства и методы
// 3. ссылочный тип данных

const num = 5;

const obj = {}; // #234
const num2 = num; // (5 & 5)
const obj2 = obj; // #234

obj2.name = "Aidar";
console.log(obj);

// const arr = []; // new Array

class Student {
}

const st = new Student();

const user = {
    name: "Bob",
    age: 23,
    isStudent: false
}
// Bob became a student
const copyUser = {
    ... user,
    // name: "Bob",
    // age: 23,
    // isStudent: true
    isStudent: true
}

const arr = [1, 2, 3, 4, 5];
const copyArr = [...arr];

console.log(user === copyUser);

function stateChecker(curr, next) {
    if (curr === next) {
        alert("no changes")
    } else {
        alert("need refresh page")
    }
}

stateChecker(user, copyUser);


const students = [
    {
        name: "Azim",
        age: 22,
        address: {
            city: "Bishkek",
            street: "Manas"
        }
    },
    {
        name: "Kolya",
        age: 22,
        address: {
            city: "Astana",
            street: "Nazarbaeva"
        }
    }
]

// CRUD
// Create
// Read (filter, sort, search)
// Update
// Delete

// add new student "CREATE"

const newStudent = {
    name: "John",
    age: 28,
    address: {
        city: "Taskent",
        street: "Tamerlan"
    }
}

const students_1 = [...students, newStudent] // [old, old, new]

// stateChecker(students, students_1);

// const students_2 = [... students, {...newStudent, address: {...newStudent.address, street: "FIFA"}}];

// Change age to John
const students_2 = students_1.map(st => st.name === "John"
    ? {...st, address: {...st.address, street: "FIFA"}}
    : st
)
stateChecker(students_1, students_2);

const student_3 = students_2.filter(el => el.name !== "Bob")
stateChecker(students_2, student_3)