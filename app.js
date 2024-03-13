//////////////////////////
// Part 0: Initial Code //
//////////////////////////

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


///////////////////////////
// Part 1: Math Problems //
///////////////////////////

// Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log('Are these numbers divisible by 5? ' + isDivisibleBy5)

// Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerThanLast = n1 > n4;
console.log('Is the first number larger than the last number? ' + firstLargerThanLast)

/*
  Accomplish the following arithmetic chain:
  - Subtract the first number from the second number.
  - Multiply the result by the third number.
  - Find the remainder of dividing the result by the fourth number.
*/

let arithmeticChain = n2 - n1;
arithmeticChain = arithmeticChain * n3;
arithmeticChain = arithmeticChain % n4;
console.log(`The result to this arithmetic chain is: ${arithmeticChain}`)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isNotOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Are all of the numbers not over 25? ${isNotOver25}`)

// Part 2
// Constants
const totalDistance = 1500;
const fuelBudget = 175;
const costPerGallon = 3;

// Fuel efficiency at different speeds
const fuelEfficiency = { //miles per gallon
    55: 30,
    60: 28,
    75: 23
}

//Calculate fuel needed for the entire trip and trip duration
const results = {};
for (let speed in fuelEfficiency) {
    const mpg = fuelEfficiency[speed];
    const fuelNeeded = totalDistance / mpg;
    const tripDuration = totalDistance / speed;
    const fuelExpense = fuelNeeded * costPerGallon;

    results[speed] = {
        fuelNeeded: fuelNeeded.toFixed(2),
        tripDuration: tripDuration.toFixed(2),
        fuelExpense: fuelExpense.toFixed(2),
        isBudgetEnough: fuelExpense <= fuelBudget
    };
}

//Log the results
for (let speed in results) {
    const result = results[speed];
    console.log(`At ${speed} miles per hour:`);
    console.log(`- Fuel needed: ${result.fuelNeeded} gallons`);
    console.log(`- Trip duration: ${result.tripDuration} hours`);
    console.log(`- Fuel expense: $${result.fuelExpense}`);
    console.log(`- Budget enough: ${result.isBudgetEnough ? 'Yes' : 'No'}`);
    console.log();
  }
