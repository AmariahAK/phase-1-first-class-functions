// Define "first-class function"
// Use inline functions
// Use functions as return values
// Define "higher-order function"

// Exercise routines
function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  
  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }
  
  // Exercise routine function accepting a callback
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  
  // Routines for different days
  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function Tuesday() {
    exerciseRoutine(swimFortyLaps);
  }
  
  function Wednesday() {
    exerciseRoutine(runFiveMiles);
  }
  
  function Thursday() {
    exerciseRoutine(liftWeights);
  }
  
  function Friday() {
    exerciseRoutine(swimFortyLaps);
  }
  
  // Higher-order function returning a function
  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  }
  
  // Functions required for the tests
  function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {};
  }
  
  function returnsAnAnonymousFunction() {
    return () => {};
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  