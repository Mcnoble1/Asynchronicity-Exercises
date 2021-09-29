// Thinking point (no writing code necessary for this challenge): 
// Inspect the code given to you in Challenge 1. 
// In what order should the console logs come out? Howdy first or Partnah first?

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  testMe();