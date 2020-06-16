// user 6 -> main.js -> 'Fizz' -> user

// user -> 'orange' -> main.js -> 'red and yellow' -> user

// user -> 'orange' -> main.js
// main.js -> 'orange' -> back-end
// back-end -> 'red and yellow' -> main.js 
// main.js -> 'red and yellow' -> user

function whatCanIDoLegally(age) {
    // if it's under 18, they cannot dive or drink
    if (age < 18) {
        return "You can't do anything."
    }
    // if it's between 18 and 20 inclusive, they can drive
    else if (age >= 18 && age <= 20) {
        return "You can drive but don't drink."
    }
    // if it's at least 21, they can do both
    else {return "You can do either. But do not do both at the same time."}
}

module.exports = whatCanIDoLegally