
// 2. Reference the callback function we passed
function beginProcess(cb) {
  const passMe = 'pass me to the callback'
  // 3. Call the callback function and pass it the passMe variable so that the callback prints 'pass me to the callback' to the console
  cb(passMe)
}

// 1. Call beginProcess and pass it a callback function as an argument
beginProcess(function (str) {
  console.log(str)
})

function test(num) {

}

test()