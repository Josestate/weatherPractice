import React, { useState } from 'react';
import '../WeatherCard/WeatherCard.css'

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true);

  return (
    <article>
        <h1>Wheater APP</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <section>
            <header>
                <img src={`https://api.openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </header>
            <article>
                <h3>{weather?.weather[0].description}</h3>
                <ul>
                    <li>
                        <span>Wind Speed</span><span>{weather?.wind.speed} m/s</span>
                    </li>
                    <li>
                        <span>Clouds</span><span>{weather?.clouds.all} %</span>
                    </li>
                    <li>
                        <span>Pressure</span><span>{weather?.main.pressure} hPa</span>
                    </li>
                </ul>
            </article>
            <section>
                <h2>{ isCelsius ? `${temp?.celsius} C` : `${temp?.fahrenheit} F`}</h2>
            </section>
        </section>
        <footer>
            <button onClick={()=>setIsCelsius(!isCelsius)}>Change to F/C</button>
        </footer>
    </article>
  )
}

export default WeatherCard