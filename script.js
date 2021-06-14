// Checking if a number is big

const biggerThan = function(number) {
    if(number > 100){        
        return true;
    }
    else {
        return false;
    }
}

const number = 90;
// const number = 110;
const answer = biggerThan(number);
console.log("This number is bigger than 100: " + answer);
// This function belongs to the category of functions that do something.


// Bouncer at a club

const bouncerBot = function(maxGuests, currentGuests, ageGuest, minAge) {
    if(currentGuests < maxGuests && ageGuest >= minAge) {
        return "come in";
    }
    else if(currentGuests >= maxGuests && ageGuest >= minAge) {
        return "it's too busy now, come back later";
    }
    else if(ageGuest < minAge && currentGuests < maxGuests || currentGuests >= maxGuests) {
        return "this is a club for adults";
    }
}

const maxGuests = 200;
const currentGuests = 200;
const ageGuest = 16;
const minAge = 18;

const message = bouncerBot(maxGuests, currentGuests, ageGuest, minAge);
console.log("Brenda the Bouncer Bot says: " + message);

// This function belongs to the category of functions that do something.


// Calculating the average

const calculateAverage = function(numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return average;
}

const numbers = [1,2,4,8,9];
console.log("The precise average is: " + calculateAverage(numbers));
console.log("The rounded average is: " + Math.round(calculateAverage(numbers)));