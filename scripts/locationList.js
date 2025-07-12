import { database } from "./aquariumData.js";

export const locationList = () => {
    let html = `<article class="locations">`
    database.locations.map(location => {
        html += `<section class="location">${location.name}
        </section>`
    })

    html += `</article>`
    return html
}