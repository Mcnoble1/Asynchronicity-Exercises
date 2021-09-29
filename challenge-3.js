// Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
function helloGoodbye() {
    setTimeout(goodbye, 2000)
    console.log('hello')
  }
  
  function goodbye() {
    console.log('good bye')
  }

  helloGoodbye();