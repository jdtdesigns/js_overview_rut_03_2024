

const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

function getNames() {
  const names = localStorage.getItem('names') || []

  return names
}

function addName(eventObj) {
  eventObj.preventDefault()

  const userName = nameInput.value
  const names = getNames()

  console.log('names', names)

  nameOutput.innerText = 'Stored Name: ' + userName

  names.push(userName)

  console.log(names)

  localStorage.setItem('names', names)
}

function outputName() {
  const nameValue = localStorage.getItem('name')

  nameOutput.innerText = 'Stored Name: ' + nameValue
}

outputName()

form.addEventListener('submit', addName)