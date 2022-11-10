// const  ls = new LS()
//
// ls.setCity("Tallinn")
// const initCity = ls.getCity()
//
// const weather = new Weather(initCity)
// If this does not display the values, use this.

const weather = new Weather(`Tallinn`)

const ui = new UI()

const form = document.querySelector(`#change-city`)
form.addEventListener(`submit`, changeWeather)

function changeWeather(event) {
    const city = document.querySelector(`#city-name`).value
    weather.changeCity(city)
    getWeather()
    document.querySelector(`#city-name`).value = ``
    event.preventDefault()
}

function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

getWeather()
