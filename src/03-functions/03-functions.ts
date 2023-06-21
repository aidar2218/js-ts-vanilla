import {StudentType} from "../02-objects/02-objects";
import {CityType, GovernmentBuildingsType, HouseType} from "../02-objects/02-02-objects";

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        skill: skill
    })
}

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true;
}

export const doesStudentLiveInCity = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repaireHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCount: number) => {
    building.staffCount -= staffCount;
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCount: number) => {
    building.staffCount += staffCount;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} person`;
}