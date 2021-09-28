// Create a function brokenRecord that console logs hi again every second. 
// Use the End Code button to stop the console logs when you are satisfied that it is working.

function brokenRecord() {
    console.log('hi again')
    setTimeout(brokenRecord, 1000)
  }
  brokenRecord()