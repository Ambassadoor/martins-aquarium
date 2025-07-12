import { database } from "./aquariumData.js";

export const locationList = () => {
    let html = `<article class="locations">
    <div id = "locationsHeader">
    <h2>Locations</h2>
    </div>
    <div id ="locationsCardsBox">`
    database.locations.map(location => {
        html += `<section class="location">
            <div class="locationsText">
                <h3>${location.name}</h3>
                <p>Countries: ${location.country}</p>
                <p>${location.description}</p>
            </div>
        </section>`
    })

    html += `</div></article>`
    return html
}