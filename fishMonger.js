// Goal: let fishMonger buy the fish from fishing boat, then offr them to teh restaraunt at aspecified quantity and price. 
/* 
1. import that array of whats available from the Fishing Boat 
2. make a new array that separates the fish that the fishMonger bought from the full catch. do that with a for loop with a conditioinal inside it. assign that reasult to a variable
3. now that you have the fish monge's inventory in variable, you can iterater over that new array thats stored there, and and let it push th fish that are under 5 dollars to a new variable, alongside new teh property of amount: 10

*/


const { boatInventory } = require('./fishingBoat')

//TODO: this variable freshFishforsale is pushing the array twice... why?
//*solved: push the import the function itself,
const freshFishForSale = boatInventory()

const fishMongerPurchases = [] //AKA what he fishMonger bought  to offer to the restaraunt

for (const fish of freshFishForSale) { 
    if(fish.price <= 7.50 && fish.amount >= 10) {
        fishMongerPurchases.push(fish)
    }
}

const mongerFishToSell = []


const mongerInventory = (object) => {
    for(const fishToBuy of object){
        if(fishToBuy.id < 4) {
            fishToBuy.amount = 10
        }
        if(fishToBuy.price <= 5.00) {  
            mongerFishToSell.push(fishToBuy)
        } 
    }
}
mongerInventory(fishMongerPurchases)
// console.log(mongerFishToSell)

module.exports = { mongerFishToSell, mongerInventory }

