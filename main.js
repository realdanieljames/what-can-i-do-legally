const whatCanIDoLegally = require('./back-end.js')

// get the user's age from the console
const age = getInput(0);

// get message based on that age from the back end
const message =  whatCanIDoLegally(age);

// print it out for the user
console.log(message)

function getInput(i) {
  return process.argv[i + 2];
}
