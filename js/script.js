const baseURL = 'https://api.openweathermap.org/data/2.5'
const apiKey = '3acc16ffae9e45df92a064e41646355f'

function outputCurrentWeather(currentData) {
  const tempEl = $('#current-temp')
  const windEl = $('#wind-speed')

  tempEl.text(`Temp: ${currentData.main.temp.toFixed(0)} °`)
  windEl.text(`Wind Speed: ${currentData.wind.speed} mph`)

  return currentData.name
}

function getCurrentWeatherByCity(cityName) {
  const options = `/weather?q=${cityName}&appid=${apiKey}&units=imperial`
  const url = baseURL + options

  return $.get(url)
}

function getForecastWeather(cityName) {
  const options = `/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
  const url = baseURL + options

  return $.get(url)
  // return fetch(url)
  //   .then(function (res) {
  //     // Pass the parsed json data to the next .then in the chain
  //     return res.json() // Returns a promise object that must be resolved to get to the data
  //   })
}

function outputForecastWeather(foreCastData) {
  const foreCastSection = $('#forecast-section')
  // console.log(foreCastData)
  foreCastData.list.forEach(function (weatherObj) {
    foreCastSection.append(`
      <div>
        <h3>Temp: ${weatherObj.main.temp.toFixed(0)} °</h3>
        <p>Wind Speed: ${weatherObj.wind.speed} mph</p>
        <p>Time: ${dayjs(weatherObj.dt_txt).format('MMM D, YYYY hh:mm a')}</p>
      </div>
    `)
  })

}


getCurrentWeatherByCity('London')
  .then(outputCurrentWeather)
  .then(getForecastWeather)
  .then(outputForecastWeather)

// const date = dayjs('2024-11-15').add(5, 'hours')

// document.body.insertAdjacentHTML('afterbegin', `<p>${date.format('MM/DD/YYYY hh:mm a')}</p>`)


