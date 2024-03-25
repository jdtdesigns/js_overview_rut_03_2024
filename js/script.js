const contentWrap = document.querySelector('.content-wrap')
const btn = document.querySelector('button.start-btn')

function collectPets() {
  const animals = []
  let keepGoing = true

  while (keepGoing) {
    let animalName

    while (!animalName) {
      animalName = prompt('Type your animal name')
    }

    const animalType = prompt('What is the animal\'s type')

    const animalObj = {
      name: animalName,
      type: animalType
    }

    animals.push(animalObj)

    const wantsToContinue = confirm('Click Ok to add another animal')

    keepGoing = wantsToContinue
  }

  return animals
}

function displayAllAnimals(animals) {
  for (let animal of animals) {
    // Insert a div for every animal object in animals and insert into the content-wrap div
    contentWrap.insertAdjacentHTML('beforeend', `
      <div>
        <h3>Name: ${animal.name}</h3>
        <p>Type: ${animal.type}</p>
      </div>
    `)
  }
}

function consoleRandomAnimal(animals) {
  // Use Math.floor and Math.random to get a random object from the animals array and display that animal data in the console
}

function startProcess() {
  // Gathers all the animals
  const animals = collectPets()

  // Display all animals
  displayAllAnimals(animals)

  // Console out a random animal
  consoleRandomAnimal(animals)
}

btn.addEventListener('click', startProcess)
