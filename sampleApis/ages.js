const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// get an array of 21 or older//

//const canDrink = []

//for (let i = 0; i < array.length; index++) {
    //const element = array[index];
    
// }
//with long way filter//
const canDrink = ages.filter(function (age) {
    if (age >= 21) {
        return true
    }
})
console.log(canDrink)
 // with filer short way