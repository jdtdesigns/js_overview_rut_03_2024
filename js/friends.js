// Select the ul from the DOM
const friendsOutput = document.querySelector('ul')

// Grab the names data from localstorage(make sure to parse)
const raw = localStorage.getItem('friends')
const friends = JSON.parse(raw) || []

// Receive the delete button element
function removeFriend() {
  // Get the txt of the button (used to retreive the name)

  // Use the array.filter method to filter the friends array out and remove the name matching the button text

  // Overwrite the old names data in localstorage(stringify)

  // Remove the button's parent <li> from the DOM
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

  // When a delete button is clicked, pass the el to the removeFriend function
})