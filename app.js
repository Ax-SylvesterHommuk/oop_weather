const weather = new Weather(`Tallinn`)

function getWeather(){
    weather.getWeather()
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}

getWeather()