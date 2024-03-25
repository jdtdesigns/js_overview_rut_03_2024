// const document = {
//   addEventListener: function (eventType, callback) {
//     // When eventType occurs call callback

//     // Event object is an object of information and tools related to the user event/action that just occured
//     const eventObject = {
//       mouseX: 423.23424
//     }

//     callback(eventObject)
//   }
// }



// document.addEventListener('keypress', function (eventObj) {
//   console.log(eventObj.mouseX)
// })

// const data = {
//   name: 'JD',
//   age: 44,
//   printBirthday: function () {
//     console.log(this.age)
//   }
// }

// data.printBirthday()
someFunc()

function someFunc() {
  console.log('works')
}

someFunc()




// function someFunc(num, callback) {
//   callback('passed to the callback', 30, ['apple', 'orange'])
// }

// someFunc(5, function (text, num, arr) {
//   console.log(arr[0])
// })