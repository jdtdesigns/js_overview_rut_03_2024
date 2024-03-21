

function one() {
  const sharedVar = 'shared'
  console.log(sharedVar)
}

function two() {
  console.log(sharedVar)

  if (true) {
    console.log('nested', sharedVar)
  }
}

function three() {
  console.log(sharedVar)
}


one()
three()





















// // function gatherNames(...names) {
// //   // const names = [name1, name2, name3, name4]
// //   console.log('spread names:', names)
// //   return names
// // }

// // const studentNames = gatherNames('Trevor', 'William', 'Muhsin', 'Mirsad')

// // console.log(studentNames)

// // const businessNames = gatherNames('Office Depot', 'MicroCenter', 'Best Buy')

// // console.log(businessNames)

// // const something = 'something'

// // console.log(something)

// // function add(num1, num2) {
// //   return num1 + num2
// // }

// // const result = add(10, 15)

// // console.log(result)

// function someFunc() {
//   console.log('some function')
// }

// // someFunc()

// const myFunc = function (first, second) {
//   console.log(second)
// }

// // myFunc('one', 'two')

// // (function () { console.log('called') })()

// // SCOPE
// function printName(studentName) {
//   const capitalize = function (name) {
//     return name[0].toUpperCase() + name.slice(1)
//   }

//   return capitalize(studentName)
// }

// capitalize()

// // const capName = printName('muhsin')

// // console.log(capName)

// // const str = 'asdflkajsdfl'
// // console.log(str.toUpperCase())

// // const str = 'some string'

// // console.log(str.slice(5))