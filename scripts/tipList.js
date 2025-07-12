import { database } from "./aquariumData.js";

export const tipList = () => {
    let html = `<ul class="tips">`

    database.tips.map(tip => {
        html += `<li class="tip">${tip.text}</li>`
    })

    html += `</uL>`
    return html
}