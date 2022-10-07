// goal: let the chef buy all the fish from the Fishmonger that meet his requirements. THen, bring everything from the purchase into an html string, that can then be accessed by the menu. 
/*
1. import the variable from the FishMonger module. thius contains all the fish objects that meet the chef's wants  
2. deosnt say I had to disaplay hgow many fish were bought, so i'll skip that. 
3. Set up a function called fishMenu that can accept the imported variable as a parameter, and then will spit out the requested HTML string in the correct format.
*/



const { mongerInventory, mongerFishToSell } = require('./fishMonger')

// console.log(mongerFishToSell)

// const fishMenu = (object) =>{
//     const menuStringHTML = `<h1>Menu</h1>\n<article class="menu">\n\t<h2>${mongerFishToSell.species}</h2>\n<section class="menu__item">${mongerFishToSell.species}Soup</section>\n<section class="menu__item">${mongerFishToSell.species} Sandwich</section>\n<section class="menu__item">Grilled ${mongerFishToSell.species}</section></article>`
//     return menuStringHTML
// }


// use this from your self assessment 1 as a reference: 


const fishMenu = () => {
  let fishMenuAsHTML = "";

  for (const fishType of mongerFishToSell) {
    fishMenuAsHTML += `\n<h1>Menu</h1>\n<article class="menu">`;
    fishMenuAsHTML += `\n\t<h2>${fishType.species}</h2>`;
    fishMenuAsHTML += `\n\t<section class="menu__item">${fishType.species} Soup</section>\n\t<section class="menu__item">${fishType.species} Sandwich</section>\n\t<section class="menu__item">Grilled ${fishType.species}</section>`
  }
    fishMenuAsHTML += `\n</article>`;
    return fishMenuAsHTML; 
    //*solved: i had two for loops, and just have just had all of teh object literals in ONE loop. it wasnm't even about the return placement lol
    // TODO: figure out where this return goes in order to get the loop to stop at teh right part. I'm so close. just try to understand where the loop has to be.
};

let menu = fishMenu() //!note: don't call the fn on the page you're trying to export from, or else it will use that value AGAIN when yopu call it after importing to another module.
// console.log(menu) // TODO: figure out why this variable is also printing the the full array, and also not indenting the article tag at the end  

module.exports = { fishMenu }

