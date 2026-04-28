// Danyl John Duguid I of Auchenhove 
// 4/28/2026
// Convert Traditional Functions to Arrow Functions

// TODO 1: Rewrite each traditional function as an arrow function
// TODO 2: Then call each function and make sure the function works!

//had to comment out the initial functions or else the code wouldnt run

// Converts kilometers to miles
// Traditional function
// function convertToMiles(kilometers) {
//   return kilometers * 0.621371;
// }

// // Calculates perimeter of a rectangle
// // Traditional function
// function calcRectPerimeter(length, width) {
//   return 2 * (length + width);
// }

// // Builds a product description using a template string
// // Traditional function
// function describeProduct(name, price) {
//   return `The ${name} costs $${price.toFixed(2)}.`;
// }

// // Display user profile
// // Traditional function
// function showUserProfile(name, age, city) {
//   return `${name} is ${age} years old and lives in ${city}.`;
// }

// TODO 3: REWRITE YOUR FUNCTIONS AS ARROW FUNCTIONS BELOW THIS LINE

// Converts kilometers to miles
// Traditional function
const convertToMiles = (kilometers) => {
  return kilometers * 0.621371;
};

// Calculates perimeter of a rectangle
// Traditional function
const calcRectPerimeter = (length, width) => {
  return 2 * (length + width);
};

// Builds a product description using a template string
// Traditional function
const describeProduct = (name, price) => {
  return `The ${name} costs $${price.toFixed(2)}.`;
};

// Display user profile
// Traditional function
const showUserProfile = (name, age, city) => {
  return `${name} is ${age} years old and lives in ${city} and needs to move out.`;
};

// TODO 4: Use console.log() to display each function's output
console.log(`5 kilometers is equal to ` + convertToMiles(5) + ` miles`); 
console.log(`The perimeter of a given rectangle with a height of 5 and a width of 10 is ` + calcRectPerimeter(10, 5) + ` units`); 
console.log(describeProduct("Slice of pie", 3.14)); 
console.log(showUserProfile("Alice", 30, "Wonderland")); 
