// Select the form
const todoForm = $('#todo-form')
const todoOutput = $('.todo-output')

function getTodos() {
  return JSON.parse(localStorage.getItem('todos')) || []
}

function outputTodos() {
  const todos = getTodos()

  // If todos are not empty, hide the empty placeholder paragraph
  if (todos.length) {
    $('.empty-status').hide()
  }

  // Empty the todos out of the output div
  todoOutput.empty()

  todos.forEach(function (todo, index) {
    // Output a div with the text of the todo and a button to delete into the todo-output div
    todoOutput.append(`
      <div class="todo">
        <h3>${todo}</h3>
        <button data-index="${index}">Delete</button>
      </div>
    `)
  })

}

// Function that stores todo
function addTodo(eventObj) {
  eventObj.preventDefault()
  // Grab the todo text from the input
  const todoInput = $('#todo-input')
  const text = todoInput.val()

  // Retrieve old todos
  const todos = getTodos()

  // Add the the todo to the todos array
  todos.push(text)

  // Overwrite/Save the todos array to localStorage
  localStorage.setItem('todos', JSON.stringify(todos))

  // Empty the input to get ready for the next todo
  todoInput.val('')

  // Output the todos to the DOM
  outputTodos()
}

function deleteTodo() {
  const btn = $(this) // eventObj.target
  // Get the old todos
  const todos = getTodos()
  // Get the index of the todo that needs to be deleted
  const index = btn.data('index')

  // Splice our todos array, using the index
  todos.splice(index, 1)

  // Overwrite/Save the todos array to localStorage
  localStorage.setItem('todos', JSON.stringify(todos))

  // Remove the todo div of the todo that was deleted
  // - Grab the parent of the button and remove it
  btn.parent().remove()

  // If no more todos, show the empty status paragraph
  if (!todos.length) {
    $('.empty-status').show()
  }
}

// Add a submit listener to form that triggers a function that stores/saves the todo
todoForm.on('submit', addTodo)
// Add a click listener on the todo output div that gets triggered if a delete button is pressed within the div
// Event Delegation
todoOutput.on('click', 'button', deleteTodo)

// Output todos
outputTodos()