// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set its value to a string called Dane.
// Then we check if the value of the variable of name is Mary and only is Mary,
// we console.log 'Hi, Mary!'
// If the value of name isn't Mary or is anything else, we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make an undefined variable called secret. We make number variable named code and give it the value of 123.
// We check if the value of code is 123 and if so, we change the value of secret to a string called super.
// Then we modify the value of code by multiplying it by 2. We check if the value of code is greater than 250.
// If so, secret's new value would be changed to 'duper.' After sorting the conditionals, we console.log 'super.'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We defined 3 variables: isStudent, a boolean with the value of true, age, a number variable with the value of 34, and zip, another number variable with the value 55407.
// We then check if the value of isStudent is true AND if the value of zip is less than 80000, and if so, we console.log 'You're a student on the West Coast!'
// If BOTH or EITHER of the criteria listed in the conditionals above are NOT met, we now check if the value of isStudent is false OR if the value of age is less than 30.
// If EITHER conditionals are met, we console.log 'What are your hobbies?' If the previous conditionals weren't met, then we now only check for whether the value of isStudent is true.
// If so, then we console.log 'Welcome to Prime!' Then we check if any of the conditionals listed above had been met, and if not, we default to console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - colorOne and colorTwo's value are switched around.
// colorOne should be let colorOne = 'blue'
let colorOne = 'red';
// colorTwo should be let colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// FIX - instructions stated that BOTH colorOne and colorTwo should be set to purple if mix is true.
  colorOne = 'purple';
// colorTwo = 'purple'; should be added
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the instructions stated that the conditional is that temp should be > 39 AND time should >= 4, not OR.
// Should be if (temp > 39 && time >=4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - instructions state that age should be >= minAge and the console.log should state 'enter'
// Should be if (age >= minAge) {
if(minAge <= age) {
// Should be console.log ('enter')
  console.log('no entry');
} else {
// Should be console.log('no entry')
  console.log('enter');
}
*/
