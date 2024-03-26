
// Select the form element
const friendForm = document.querySelector('#friend-form')

/**
  Create a function that triggers when the submit event occurs
  
  */
function addFriend(eventObj) {
  // - Stop/Prevent the page from refreshing
  eventObj.preventDefault()

  // - Grab the input value from our name input (what they typed into the box)
  const nameValue = friendForm.username.value

  // - Grab all the names that have already been store to local storage
  const raw = localStorage.getItem('friends')
  const names = JSON.parse(raw) || []

  // - Add the new name to the names
  names.push(nameValue)

  // - Overwrite the old names value in local storage with the newly updated names
  localStorage.setItem('friends', JSON.stringify(names))

  // - Send the user to the View Friends Page
  window.location = 'friends.html'
}


// Wrap all initial starting listeners and any code that needs to run when the page loads in a function(initializing function)

function init() {
  // Create a submit event listener for the form
  friendForm.addEventListener('submit', addFriend)
}

init()