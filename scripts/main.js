import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

import { mostHolyFish, soldierFish, regularFish } from './fishFunctions.js'

const threeFish = fishList(mostHolyFish(),"Holy Fish");
const fiveFish = fishList(soldierFish(), 'Soldier Fish');
const otherFish = fishList(regularFish(), "Regular Fish");

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
document.getElementById("fishList").innerHTML = `${threeFish}${fiveFish}${otherFish}` || `${fishHTML}`;
document.getElementById("tipList").innerHTML = tipHTML;
document.getElementById("locationList").innerHTML = locationHTML
