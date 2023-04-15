const ages = [22, 18, 91, 34, 100, 44];

const predicate = (age: number) => {
    return age > 90;
}


const oldAges = [100];

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150}
];


const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: "css", price: 110},
    {title: "react", price: 150}
]