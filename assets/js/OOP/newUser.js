// OOP DEEP DIVE
// We're creating a lot of objects here by hand.
/**
 * 
 * @param {string} name 
 * @param {number} score 
 * @returns {Object}
 */
function newUser (name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    return newUser.score++;
  }
  return newUser;
}

// const user1 = newUser('Phil', 4);
// const user2 = newUser('Jill', 5);

/**
 * Updating the newUser creation function to use Object.create()
 * 
 * 
 * @returns {Object} 
 */
function createUser (name, score) {
  const newUser = Object.create(userFunctionStore); // This is the object that will be used as the prototype on newUser
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

/**
 * We save all our functionality in this object literal and use the Prototype chain (Object.create()) to save the functionality to our new object
 * We can add all we want to this, as little or as much functionality as we need.
 * Linking properties here with Object.create in createUser()
 */
const userFunctionStore = {
  increment: function(){this.score++},
  login: function(){console.log('You are logged in')}
}

// const user1 = createUser('Dan', 1);
// console.log(user1);
// user1.increment();
// console.log(user1);

/**
 * JS goes looking for properties on the object's prototype if it doesn't find the value on the object being queried.
 * 
 */

/**
 * Automating Objects with the "new" and "this" keyword
 * Functions in JS are both Objects and Functions
 * 
 */
function multBy2(num) {
  const mult = num * 2
  return {
    stored: mult
  }
}

// console.log(multBy2(2));
/**
 * Similiar to Classes in other languages, just using the prototype chahin to link instances of objects together.
 * 
 * @param {*} name 
 * @param {*} score 
 */
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++
};

UserCreator.prototype.login = function () {
  console.log('login')
}

const user1 = new UserCreator('Eva', 1);
const user2 = new UserCreator('Don', 5);

// console.log(user1);
// user1.increment();
// console.log(user1);

// console.log(user2);
// user2.increment();
// console.log(user2);