type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}



const student: StudentType = {
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

console.log(student.technologies[2].title);