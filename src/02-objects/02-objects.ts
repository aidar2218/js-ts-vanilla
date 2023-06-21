type AddressType = {
    street: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    country: string
}

type TechType = {
    id: number
    skill: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}

export const student: StudentType = {
    id: 1,
    name: "Aidar",
    age: 23,
    isActive: true,
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

