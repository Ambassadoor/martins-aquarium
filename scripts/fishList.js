import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let htmlString = `<article class="fishList">`

    database.fish.map(fish => {
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location: ${fish.location}</div>
        </section>
`
    htmlString += `</article>`
    })
    return htmlString
};