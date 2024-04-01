const todoForm = $('form')
const todoSection = $('.to-do')
const doneSection = $('.done')

function getTodos() {
  const raw = localStorage.getItem('todos')
  const parsed = JSON.parse(raw) || []

  return parsed
}


function setupDrag(els) {
  els.draggable({
    opacity: 0.7,
    zIndex: 100,
    revert: true
  })
}

function setupDrop() {
  $('.to-do, .done').droppable({
    accept: '.item',
    drop: function (eventObj, ui) {
      const section = $(eventObj.target)
      const paragraph = $(ui.draggable[0])
      const index = paragraph.data('index')

      paragraph.css({
        position: 'relative',
        top: 0,
        left: 0
      })

      section.append(paragraph)

      const todos = getTodos()

      const todoObj = todos[index]

      if (section.hasClass('to-do')) {
        todoObj.status = 'to-do'
      } else {
        todoObj.status = 'done'
      }

      localStorage.setItem('todos', JSON.stringify(todos))
    }
  })
}

function addTodo(eventObj) {
  eventObj.preventDefault()

  const todoInput = $('#todo-input')
  const todoText = todoInput.val()
  const paragraph = $(`<p class="item">${todoText}</p>`)

  setupDrag(paragraph)

  todoSection.append(paragraph)
  todoInput.val('')

  const todos = getTodos() // []

  const newTodoObject = {
    text: todoText,
    status: 'to-do'
  }

  todos.push(newTodoObject)

  localStorage.setItem('todos', JSON.stringify(todos))
}

function outputTodos() {
  const todos = getTodos()

  todos.forEach(function (todoObj, index) {
    const paragraph = $(`<p data-index="${index}" class="item">${todoObj.text}</p>`)
    // Target the section based on the status
    //  and append them to that section
    if (todoObj.status === 'to-do') {
      todoSection.append(paragraph)
    } else {
      doneSection.append(paragraph)
    }

  })
}

function initialProcesses() {
  setupDrop()
  outputTodos()
  setupDrag($('section p'))

  todoForm.on('submit', addTodo)
}

initialProcesses()














// helper: function (eventObj) {
//   const paragraphBeingDragged = eventObj.target
//   const jQueryVersion = $(paragraphBeingDragged)

//   const copy = jQueryVersion.clone().css({
//     maxWidth: jQueryVersion.outerWidth(),
//   })

//   return copy
// }
// document.querySelectorAll('p').addEventListener('drag', function() {

// })



















// const contentSection = $('.main-content-section')

// function getArticles() {
//   return JSON.parse(localStorage.getItem('work')) || []
// }


// $('.drop-section, .main-content-section').droppable({
//   accept: 'article',
//   drop: function (dropEvent, ui) {
//     const articles = getArticles()

//     const section = $(dropEvent.target)
//     const article = $(ui.draggable[0])
//     const index = article.data('index')

//     section.append(article)


//     if (section.hasClass('main-content-section')) {
//       articles[index].section = 'main'
//       article.removeClass('drop')
//     } else {
//       articles[index].section = 'placeholder'
//       article.addClass('drop')
//     }

//     localStorage.setItem('work', JSON.stringify(articles))
//   }
// })

// function outputArticles() {
//   const articles = JSON.parse(localStorage.getItem('work'))

//   articles.forEach(function (article, index) {
//     const section = article.section === 'main' ? $('.main-content-section') : $('.drop-section')

//     section.append(`
//       <article data-index="${index}" class="col-lg-4 col-xl-3 col-md-6 ${article.section !== 'main' && 'drop'}">
//         <div class="work-item p-4 text-light" style="background-image: url('https://picsum.photos/id/24${index}/800/400');">
//           <h3>${article.title}</h3>
//           <p>${article.description}</p>
//         </div>
//       </article>
//     `)
//   })

//   $('section article').draggable({
//     // opacity: 0.7,
//     zIndex: 100,
//     helper: function (eventObj) {
//       const original = $(eventObj.target).hasClass('ui-draggable')
//         ? $(eventObj.target)
//         : $(eventObj.target).closest('.ui-draggable');

//       return original.clone().css({
//         maxWidth: original.outerWidth(),
//       });
//     }
//   })
// }

// outputArticles()













// const workItems = [
//   {
//     title: 'Cool App',
//     description: 'Description work 1',
//     section: 'placeholder'
//   },
//   {
//     title: 'Cool App2',
//     description: 'Description work 2',
//     section: 'main'
//   },
//   {
//     title: 'Cool App3',
//     description: 'Description work 3',
//     section: 'main'
//   }
// ]

// localStorage.setItem('work', JSON.stringify(workItems))



























// const quoteOutput = $('#quote-output')
// const quoteBtn = $('#quote-btn')

// function outputQuote(data) {
//   quoteOutput.text(data.content)
//   console.log('output')
// }

// async function getQuote() {
//   const url = 'https://api.quotable.io/random'
//   // const url = 'https://swapi.dev/api/people'
//   const res = await fetch(url) // returns a promise object
//   const data = await res.json()

//   return data
// }

// getQuote()
//   .then(outputQuote)


// quoteBtn.on('click', function () {
//   getQuote().then(outputQuote)
// })




// console.log('done')
// const promise = {
//   then: function(callback) {
//     // Once the value comes back or whatever thing is done
//     callback(resolvedOrFinishedValue)
//   },

//   catch: function() {

//   }
// }

// promise.then(function(value) {

// })

















// const quotes = [
//   'Bootstrap rocks',
//   'Web development rules',
//   'Coding is rad'
// ]

// var quote = quotes[Math.floor(Math.random() * quotes.length)]