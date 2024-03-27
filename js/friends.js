// Select the ul from the DOM
const friendsOutput = document.querySelector('ul')

// Grab the names data from localstorage(make sure to parse)
const raw = localStorage.getItem('friends')
const friends = JSON.parse(raw) || []

// Receive the delete button element
function removeFriend(btnObj) {
  // Pull the index(data-index) value from the button that was clicked
  const index = btnObj.dataset.index

  // Remove the name from the friends array by index number (index = index of the name in the array, 1 - The amount of names you want to remove)
  friends.splice(index, 1)

  // Overwrite the old names data in localstorage(stringify)
  localStorage.setItem('friends', JSON.stringify(friends))

  // Remove the button's parent <li> from the DOM
  btnObj.parentElement.remove()

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

  friends.forEach(function (friendName, index) {
    // Insert HTML into the friendsOutput UL at the inside end(beforeend)
    friendsOutput.insertAdjacentHTML('beforeend', `
      <li class="row align-center">
        <p>${friendName}</p>
        <button data-friend="${friendName}" data-index="${index}" class="delete-btn">Delete</button>
      </li>
    `)
  })
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
