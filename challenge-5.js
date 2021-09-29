// Create a function limitedRepeat that console logs hi for now every second, 
// but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

let myVar;
let count = 0;
function limitedRepeat() {
  console.log('hi for now')
  myVar = setTimeout(limitedRepeat, 1000)
  count = count + 1;
  // console.log(count)
  if (count === 5) {
    stopTimer()
  }
}
function stopTimer() {
  clearInterval(myVar)
}

limitedRepeat();