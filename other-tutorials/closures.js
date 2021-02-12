/*
JavaScript Closures
Examples taken from or inspired by https://www.w3schools.com/js/js_function_closures.asp
and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

const makeAdder = function() {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    };
};

// add1 is a closure
const add1 = makeAdder();

console.log(add1());
console.log(add1());
console.log(add1());

// the counter is now 3

/*
Closures allow you to access a variable defined in a child function from the parent scope.
Normally, you can only go in the other direction (i.e. access a global variable, or a variable defined in the parent,
from within a child function).
*/

// Another example
function anotherMakeAdder(x) {
    return function(y) {
        return x + y;
    };
}

// add5 and add10 are closures
const add5 = anotherMakeAdder(5);
const add10 = anotherMakeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// Practical Uses and Other Notes

// You can use a closure anywhere that you might normally use an object with only a single method.
// It is possible to emulate private methods (used by languages like Java) using closures in JavaScript.
