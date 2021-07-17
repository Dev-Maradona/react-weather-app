import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  const [temp, setTemp] = useState(0)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [humidity, setHumidity] = useState(0)
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const getWeather = async (e) => {

    e.preventDefault()

    const API_KEY = 'e36ed364400282e43250b6c4c0274d44'
    
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json()

    if (city && country) {
      setTemp(() => data.main.temp)
      console.log(temp)
  
      setCity(() => data.name)
      console.log(city)
  
      setCountry(() => data.sys.country)
      console.log(country)
  
      setHumidity(() => data.main.humidity)
      console.log(humidity)
  
      setDescription(() => data.weather[0].description)
      console.log(description)
    } else {
      setError(() => 'Some Thing Went wrong when I fetch a data')
    }

    console.log(data)
  }

  return (
    <div className="wrapper">
      <div className="form-container">
        <Form getWeather={getWeather} />
          <Weather
            temp={temp}
            city={city}
            country={country}
            humidity={humidity}
            description={description}
            error={error}
          />
      </div>
    </div>
  );
}

export default App;