const h1 = $('h1')
// const h1 = document.querySelector('h1')

h1.addClass('somethin')

$('.test-paragraph').removeClass('dummy-class')

$('#click-btn').click(function () {
  h1.fadeToggle()
})