var wantsCapital = true
var wantsLowercase = false
var wantsNumbers = true
var wantsSpecialCharacters = true
var result = 1000 < 100

// Storing datasets of the character values
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var specials = '!@#$%^&*()'
var amount = 10
var characterSet = ''
var password = ''

console.log('Building:', characterSet)

// If conditional statements require a truthy value to trigger the code block
// Combine all the characters they want into one string
if (wantsCapital) {
  characterSet += capital
  console.log('Building:', characterSet)
}

if (wantsLowercase) {
  characterSet += lowercase
  console.log('Building:', characterSet)
}

if (wantsNumbers) {
  characterSet += numbers
  console.log('Building:', characterSet)
}

if (wantsSpecialCharacters) {
  characterSet += specials
  console.log('Building:', characterSet)
}

console.log('character set completed: ', characterSet)
console.log('character set length: ', characterSet.length)
// assignment, condition, incrementor/decrementor/multiplier

// for (var index = 0; index < characterSet.length; index++) {
//   console.log(characterSet[index])
// }


for (var count = 0; count < amount; count++) {
  var ranNum = Math.random()
  var float = ranNum * characterSet.length
  var index = Math.floor(float)
  var randomCharacter = characterSet[index]

  console.log('random character:', randomCharacter)

  password += randomCharacter
}

console.log('Completed Password:', password)
// var str = 'some'
// console.log(str.length)
// console.log(characterSet[characterSet.length - 1])

// The end result will be a string that is a combination of all the character strings that they requested
// Then pull a random character n amount of times from that combined string


















