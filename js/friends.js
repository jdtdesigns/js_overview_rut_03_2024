// Select the ul from the DOM
const friendsOutput = document.querySelector('ul')

// Grab the names data from localstorage(make sure to parse)
const raw = localStorage.getItem('friends')
let friends = JSON.parse(raw) || []

// Receive the delete button element
function removeFriend(btnObj) {
  // Get the parent element of the button
  const parent = btnObj.parentElement
  // Get the txt of the button (used to retreive the name)
  const para = parent.querySelector('p')

  const name = para.innerText

  // Use the array.filter method to filter the friends array out and remove the name matching the button text
  const filtered = friends.filter(function (friend) {
    if (friend !== name) {
      return true
    }
  })

  // Replace the old friends array with the new filtered array
  friends = filtered

  // Overwrite the old names data in localstorage(stringify)
  localStorage.setItem('friends', JSON.stringify(friends))

  // Remove the button's parent <li> from the DOM
  parent.remove()

  // If friends is empty, add the paragraph to our ul that says 'No friends have been added'
  if (!friends.length) {
    friendsOutput.innerHTML = '<p>No Friends Have Been Added.</p>'
  }
}

// Create a function that loops over the friends array and outputs an li to the ul for each name in the friends array
function outputFriends() {
  // If friends array is not empty, remove the no friends paragraph from the DOM 
  if (friends.length) {
    friendsOutput.innerHTML = ''
  }

  for (let friend of friends) {
    // Insert HTML into the friendsOutput UL at the inside end(beforeend)
    friendsOutput.insertAdjacentHTML('beforeend', `
      <li class="row align-center">
        <p>${friend}</p>
        <button class="delete-btn">Delete</button>
      </li>
    `)
  }
}

outputFriends()

// Create an event listener on all delete btns so when clicked they remove that name from localstorage and also remove the li from the window

document.body.addEventListener('click', function (eventObj) {
  const el = eventObj.target

  // Check if the element that was clicked was the delete button(use the classList to see if the element has a class of delete-btn)
  if (el.classList.contains('delete-btn')) {
    // When a delete button is clicked, pass the el to the removeFriend function
    removeFriend(el)
  }
})


// const fruits = ['orange', 'apple', 'grape']

// const filteredArr = fruits.filter(function (fruit) {
//   if (fruit !== 'apple') {
//     return true
//   }
// })

// console.log(filteredArr)

// fruits.forEach(function (item, index) {
//   console.log(item, index)
// })

// for (let fruit of fruits) {

//   console.log(fruit)

//   if (fruit === 'apple') {
//     break;
//   }
// }



// const data = {
//   name: 'JD',
//   age: {
//     something: function () {
//       console.log('yep')
//     }
//   }
// }

// // console.log(data.age.something)
// data.age.something()

// const el1 = {
//   innerText: 'text'
// }

// const el2 = {
//   innerText: 'text 2'
// }
