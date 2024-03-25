const btn = document.querySelector('button')

function toggleMode() {
  const text = btn.innerText

  document.body.style.backgroundColor = text === 'Dark' ? 'white' : '#333'

  btn.innerText = text === 'Light' ? 'Dark' : 'Light'
}

btn.addEventListener('click', toggleMode)


// const link = document.querySelector('a')
// const form = document.querySelector('form')
// const outputEl = document.querySelector('#output')
// const previousSearch = localStorage.getItem('search')

// form.character.value = previousSearch

// link.addEventListener('click', function (eventObj) {
//   eventObj.preventDefault()

//   console.log(eventObj.target)
// })

// form.addEventListener('submit', function (eventObj) {
//   eventObj.preventDefault()

//   const characterName = form.character.value

//   // window.location = './about.html'
//   localStorage.setItem('search', characterName)
//   form.character.value = ''

//   // fetch('https://swapi.dev/api/people?search=' + characterName)
//   //   .then(function (res) {
//   //     return res.json()
//   //   })
//   //   .then(function (data) {
//   //     outputEl.innerHTML = ''

//   //     data.results.forEach(function (charObj) {
//   //       outputEl.insertAdjacentHTML('beforeend', `<p>Character: ${charObj.name}</p>`)
//   //     })
//   //   })


// })

// const jd = {
//   name: 'JD',
//   age: 44,
//   hobbies: ['pickleball', 'fishing']
// }