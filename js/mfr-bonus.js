// PROBLEM 1 - create an array of the first letters of each fruit

const fruit = fruits.map((fruit) => fruit.charAt(0));
console.log(fruit);


// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

let civilServant = customers.filter(user => {
    if (user.occupation === "Teacher" || user.occupation === "Police Officer") {
        return user;
    }
});
console.log(civilServant);


// Bonus problem not from outside source:
// Create a new array using ES6.

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);