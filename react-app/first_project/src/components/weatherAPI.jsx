import React from 'react'
import { useState, useEffect } from 'react';

const Weather = () => {

    const [city, setCity] = useState('London');
    const [weatherData, setWeatherData] = useState(null);


    
    const fetchWeather = async (city)=>{
        try{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=df82b43b3747450fadd54929252907&q=${city}&aqi=no`)

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched weather data:", data);
            setWeatherData(data);
        }
        catch(err){
            console.error("Error fetching weather data:", err);
        }
    }

    useEffect(()=>{
        

        fetchWeather("london");
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(city);
        console.log("Fetching weather for city:", city);
    };

  return (
    <div>
        <h1>Weather API Component</h1>
        <p> The current weather is </p>
        <form onSubmit={handleSubmit}>
            <label> City </label>
            <input 
            type='text'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            />
            <button type='submit'>Get Weather</button>

        </form>
            {city && <p>Current city: {city}</p>}
            {weatherData ? (
                <div>
                    <h2>Weather in {weatherData.location.name}</h2>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Condition: {weatherData.current.condition.text}</p>
                    <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
                </div>
            ) : (
                <p>No weather data available. Please enter a city.</p>
            )} 
            
            {!weatherData && !city && (
                <p>Please enter a city to get the weather information.</p>
            )}


    </div>
  )
}

export default Weather


// df82b43b3747450fadd54929252907