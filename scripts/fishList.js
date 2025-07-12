import { database } from './aquariumData.js';

export const fishList = (fishes,category) => {
    if (!fishes) {
        fishes = database.fish
    }
    if (!category) {
        category="Fish"
    }
    // Generate an HTML representation of each fish
    let htmlString = `
    <article class="fishList">
    <div id = "fishHeader">
        <h2>${category}</h2>
    </div>
    <div id="fishCardsBox">`
    

    fishes.map(fish => {
        htmlString += `<section class="fishCard">
            <div class="fishText">
                <p class="fish__name">Name: ${fish.name}</p>
                <p class="fish__species">Species: ${fish.species}</p>
                <p class="fish__length">Length: ${fish.length} inches</p>
                <p class="fish__location">Location: ${fish.location}</p>
            </div>
            <div class="fishImageBox">
                <img  class="fishImage" src="${fish.image}" />
            </div>
        </section>
`
    })
        htmlString += `</div></article>`
    return htmlString
};