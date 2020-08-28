// currying => breaking a function into smaller pieces
const _ = require('lodash');

const abc = (a, b, c) => a + b + c;

const curry = _.curry(abc);

// console.log(curry('Dan')('was')('here'));

// composition

const consider = name => `I think it could be ${name}`;

const exclaim = statement => `${statement.toUpperCase()}!`

const blame = _.flowRight(consider, exclaim);

console.log(blame('you'));