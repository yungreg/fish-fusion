const { fishMenu } = require("./restaurant.js")

//  Uncomment this code block when you're ready to test your logic

const menu = fishMenu()
console.log(menu)

//* A thing I learned: it's useful to make sure your test criteria are exactly met when you push changes to a repo on github. My earlier version of the code failed because the test's parameter expectations where in a different order than what I naturally ordered them. still worked, but it did make the test fail. no trouble to just reorder them once the logic works. 