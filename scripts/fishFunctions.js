import { database } from "./aquariumData.js"

const fishes = database.fish


export const mostHolyFish = () => {
    
    const holyFish = fishes.filter(fish => fish.length%3===0)

    return holyFish
}

export const soldierFish = () => {
    const lessHolyFish = fishes.filter(fish => fish.length%5===0)

    return lessHolyFish
}

export const regularFish = () => {
    const otherFish = fishes.filter(fish => fish.length%3 !== 0 && fish.length%5 !== 0)

    return otherFish
}



