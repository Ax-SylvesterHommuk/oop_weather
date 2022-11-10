class Weather {
    constructor(city) {
        this.city = city
        this.key = "7122c5b1245fc8d20e6d2ea2793ee2e4"
    }

    async getWeather(){
        const  response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }
}