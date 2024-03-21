
const fruits = ['orange', 'apple', 'grape']
const data = [10, 'one', ['John', 'Smith'], 57, null]

// Use the assignment operator to replace an item/element in an array
fruits[1] = 'kiwi'

// Use splice to insert an item(s) at a certain index or to remove an item(s) at a certain index
fruits.splice(1, 0, 'banana', 'strawberry')

console.log(fruits)

// // Adding Items to an Array
// fruits.push('kiwi')

// console.log(fruits)

// fruits.unshift('banana')

// console.log(fruits)

// fruits.splice(1, 0, 'strawberry', 'blueberry')

// console.log(fruits)

// // Removing Items from an Array
// fruits.pop()

// console.log(fruits)

// fruits.shift()

// console.log(fruits)

// fruits.splice(2, 1)

// console.log(fruits)

// // Iterating or Looping over an Array
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }
