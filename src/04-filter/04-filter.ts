const ages = [22, 84, 34, 22, 35, 56, 72, 63];

const predicate = (age: number) => {
    return age > 65;
}

const oldAges = [72, 84]; // > 65


export type CourseType = {
    title: string
    price: number
}

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

const cheapPredicate = (c: CourseType) => {
    return c.price < 220;
}

const cheapCourses = [
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
]

