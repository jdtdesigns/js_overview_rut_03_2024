// const listItems = document.querySelectorAll('li')
// const addBtn = document.querySelector('#add-btn')
// const listOutput = document.querySelector('#list')

// function handleLinkClick() {
//   console.log('list item clicked')
// }

// function addListItem() {
//   // Target listOutput and insert an li element into it at the bottom
//   listOutput.insertAdjacentHTML('beforeend', `
//     <li>Item NUM</li>
//   `)
// }

// for (let item of listItems) {
//   item.addEventListener('click', handleLinkClick)
// }

// addBtn.addEventListener('click', addListItem)


const form = document.querySelector('form')


// btn.addEventListener('click', function (e) {
//   e.preventDefault()

//   console.log('test')
// })

function submit(e) {
  e.preventDefault()
  console.log('submit')
  return false
}

form.addEventListener('submit', submit)







// const googleLink = document.querySelector('#google-link')

// googleLink.addEventListener('click', function (eventObj) {
//   eventObj.preventDefault()

//   console.log(eventObj)

//   console.log(eventObj.target)
// })

















// document.addEventListener('keypress', function (eventObj) {
//   const outputEl = document.querySelector('#target-output')

//   console.log(eventObj)
//   // Key: s / Key Code: 10
//   // outputEl.innerText = `Key: ${eventObj.key} / Key Code: ${eventObj.code}`
// })



// function test() { 
//   console.log(arguments)
// }

// test('asdfomasdfo')



// function delayCall(delayTime, callbackFunction) {
//   setTimeout(callbackFunction, delayTime * 1000)
// }

// delayCall(5, function () {
//   console.log('time complete')
// })