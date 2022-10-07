//  comments on data structures to build: looks like these given values will go into a variable that contains an array of objects. Then, I would need to iterate through that array in a for loop to be able to add the objects to 

const starterArrayOfFish = [
    // { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
    // { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
    // { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
    // { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
    // { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
    // { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
    // { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
    // { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
] 


//* rebekah explained to me that I can just strore teh array inside the function using a return, instead of having to push the whole function in a variable, then just export the function. let's see if it works! 
const boatInventory = () => {
    return [
        { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
        { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
        { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
        { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
        { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
        { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
        { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
        { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
    ] 
}

// let freshFishForSale = boatInventory()
// console.log(freshFishForSale) //*done w /rebekah 11:03am TODO: figure out why this FreshFish array is pushing twice 

module.exports = { boatInventory }
