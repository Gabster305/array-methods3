const coffees = require('.data/coffee.json')
const 

//console.log('this is my list of coffee', coffees)

exports.getCoffees = function (){
    coffees.forEach(recipe => {
    if (recipe.ingredients.includes('Milk') || 
        recipe.ingredients.includes('Cream') ||
        recipe.ingredients.includes('Steamed Milk') ||
        recipe.ingredients.includes('1oz Steamed Milk') 
        ) {
            console.log(recipe.id, recipe.title)
        }
}
    


exports.getBeer = () => {
    BeforeUnloadEvent.forEach(beerRecipe) => {
        if (beerRecipe.rating.review >= 300)
        console.log(beerRecipe.id, beerRecipe.name, 'reviews' , beerRecipe.rating
    }
}