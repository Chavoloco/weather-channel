import Weather from "./Components/Weather";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import Form from "./Components/Form";
import React from "react";
import Header from "./Components/Header";



// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
const API_KEY="2fe899c2eb25629822d98afb2fd6f3b0"

class App extends React.Component{

  constructor(props) {
    super(props)
    
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      centigrade: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      error2: false
    }

    this.weatherIcons = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  // setCity = (city) =>{
  //   this.setState({
  //     city: city
  //   })
  // }

  // setCountry = (country) =>{
  //   this.setState({
  //     country: country
  //   })
  // }

  setCentigrade = (centigrade) =>{
    this.setState({
      centigrade : centigrade
    })
  }

  setTempMax = ( temp_max ) =>{
    this.setState({
      temp_max: temp_max
    })
  }

  setTempMin = ( temp_min ) =>{
    this.setState({
      temp_min: temp_min
    })
  }

  setDescription = (description) =>{
    this.setState({
      description: description
    })
  }

  setWeatherIcon = async (icon) =>{
    this.setState({
      icon: icon
    })
  }

  getWeatherIcon(icons, rangeId){
    switch (true) {
      case  rangeId>= 200 && rangeId<= 232 :
        this.setWeatherIcon({icon: icons.Thunderstorm})
        break;
      case rangeId>= 300 && rangeId<= 331:
        this.setWeatherIcon({icon: icons.Drizzle})
        break;
      case rangeId>= 500 && rangeId<= 531:
        this.setWeatherIcon({icon: icons.Rain})
        break;
      case rangeId>= 600 && rangeId<= 622:
        this.setWeatherIcon({icon: icons.Snow})
        break;
      case rangeId>= 701 && rangeId<= 781:
        this.setWeatherIcon({icon: icons.Atmosphere})
        break;
        case rangeId === 800:
          this.setWeatherIcon({icon: icons.Clear})
          break;
      case rangeId>= 801 && rangeId<= 804:
        this.setWeatherIcon({icon: icons.Clouds})
        break;
  
      default:
        this.setWeatherIcon({icon: icons.Clear})
        break;
    }
  }

  
  getWeather = async (e) =>{
    e.preventDefault()

    this.setState({
      error: false,
      error2: false
    })

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if (city && country) {
      const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`)
      const response = await apiCall.json()

      if (response.cod === "404") {
        console.log(response);
        this.setState({error2: true})
    } else {

      this.setState({
        city: response.name,
        country: response.sys.country,
        error2: false
      })
    // let city = response.name
    // let country = response.sys.country
    let centigrade = response.main.temp
    let temp_max = response.main.temp_max
    let temp_min = response.main.temp_min
    let description = response.weather[0].description
    let weatherIconId = response.weather[0].id
    // this.setCity(city)
    // this.setCountry(country)
    this.setCentigrade(centigrade)
    this.setTempMax(temp_max)
    this.setTempMin(temp_min)
    this.setDescription( description )
    this.getWeatherIcon(this.weatherIcons, weatherIconId)
    }

    } else {
      this.setState({error: true})
      console.log("aaaaaaaaaaa");
    }

  }

  

  render(){
    return(
      <div className="App">
      <Header />
      <Form loadWeather={this.getWeather} error={this.state.error} error2={this.state.error2}/>
      
      <Weather 
      city={this.state.city} 
      country={this.state.country}
      temp_centigrade={this.state.centigrade}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min} 
      description={this.state.description}
      weatherIcon={this.state.icon}
      />
    </div>
    )
  }
}

 
export default App;
