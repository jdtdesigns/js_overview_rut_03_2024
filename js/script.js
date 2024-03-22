const contentWrap = document.querySelector('.content-wrap')
const btn = document.querySelector('button.start-btn')
const showMenu = false
const users = [
  {
    firstName: 'JD',
    lastName: 'Tadlock'
  },
  {
    firstName: 'Bob',
    lastName: 'Smith'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe'
  }
]

function randomNum() {
  return Math.random()
}

function doSomething() {
  for (let user of users) {
    // const div = document.createElement('div')
    // const firstH3 = document.createElement('h3')
    // const lastH3 = document.createElement('h3')

    // firstH3.innerText = 'First Name: ' + user.firstName
    // lastH3.innerText = 'Last Name: ' + user.lastName

    // lastH3.style.backgroundColor = 'orange'

    // div.append(firstH3, lastH3)

    // contentWrap.append(div)

    contentWrap.insertAdjacentHTML('beforeend', `
      <div>
        <h2>First Name: ${user.firstName}</h2>
        <h2 class="red">Last Name: ${user.lastName}</h2>
      </div>
    `)
  }






  // const fullName = 'JD Tadlock'

  // contentWrap.innerHTML = `
  //   <div class="inner-container">
  //     <p>inserted paragraph</p>
  //     <p>another paragraph</p>
  //     <p>Name: ${fullName}</p>
  //     <p>Number: ${randomNum()}</p>
  //     <p>${showMenu && 'menu'}</p>
  //   </div>
  // `
  // console.log(contentWrap.innerHTML)
}

btn.addEventListener('click', doSomething)
