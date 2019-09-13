// PROBLEM 4 - determine the average age of customers
//Use .reduce to get the total years of experience
// from the list of users. Once you get the total of years
// you can use the result to calculate the average.

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


//Part 1
// const avgAge = customers.reduce((total, customer) => {
//     return total + customer.age;
// }, 0);
//
// console.log(avgAge);
//Part 2
// console.log(avgAge/customers.length); /* average years of experience */

//Final Answer
const avgAge = customers.reduce((total, customer) => {
    return total + customer.age
}, 0)/customers.length;

console.log(avgAge);





// PROBLEM 5 - create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
// with the following shape...

/*
{
    name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
    age: THE_TOTAL_OF_ALL_PET_AGES,
    breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
}

*/

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];


//part 1
const petNameString = pets.reduce((finalString, pet, i) => {
    if(i < pets.length -1){
        finalString += pet.name + ", ";
    }
    else {
        finalString += `and ${pet.name}.`;
    }
    return finalString;
}, "");


console.log(petNameString);

//part 2
const petAgesTotal = pets.reduce((total, pet) => {
    return total + pet.age
}, 0);

console.log(petAgesTotal);

//part 3


const firstBreedLetter = pets.reduce((finalString, pet, i) => {
    if(i < pets.length -1){
        finalString += pet.breed.charAt(0) + ", ";
    }
    else {
        finalString += `and ${pet.breed.charAt(0)}.`;
    }
    return finalString;
}, "");


console.log(firstBreedLetter);

//part 4

const makeSuperPet = {name: petNameString, age: petAgesTotal, breed: firstBreedLetter};


console.log(makeSuperPet);


//Number 3


let numbers = [175, 50, 25];


const subtractFromLeft = numbers.reduce((remainder, number) => {
    return remainder - number;
});



console.log(subtractFromLeft);

