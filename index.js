// Define First-Class Functions
// Inline Functions
// Returning Functions
// Higher-Order Functions

// Function to demonstrate receiving and calling a callback function
function receivesAFunction(callback) {
    // Calling the callback function
    callback();
}

// Function to demonstrate returning a named function
function returnsANamedFunction() {
    // Returning a named function
    return function namedFunction() {
        console.log("This is a named function!");
    };
}

// Function to demonstrate returning an anonymous function
function returnsAnAnonymousFunction() {
    // Returning an anonymous function
    return () => {
        console.log("This is an anonymous function!");
    };
}
