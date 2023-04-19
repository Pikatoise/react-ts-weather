import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import nightSkyVideo from "./assets/videos/BlackSky.mp4";
import daySkyVideo from "./assets/videos/Sky.mp4";
import axios from "axios";
import WeatherK from "./Weather.js";
import { TimeOfDay } from "./models/TimeOfDay";
import { Weather } from "./models/Weather";
import CurrentWeatherComponent from "./components/CurrentWeatherComponent/CurrentWeatherComponent";
import FutureWeatherComponent from "./components/FutureWeatherComponent/FutureWeatherComponent";

function App() {
    const Days: string[] = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];

    const [currentCity, setCurrentCity] = useState<string>("Орск");
    const [WeatherData, setWeatherData] = useState<Weather | null>(null);

    // axios.get(`http://api.weatherapi.com/v1/search.json?key=${Weather.data}&q=orsk&`).then(response => console.log(response.data));

    useEffect(() => {
        GetWeather();
    }, [currentCity]);

    async function GetWeather() {
        axios.get<Weather>(`http://api.weatherapi.com/v1/forecast.json?key=${WeatherK.data}&q=${currentCity}&days=5&aqi=no&alerts=no&lang=ru`)
            .then(response => {
                console.log(response.data);
                setWeatherData(response.data);
            });
    }

    return (
        <div className={styles.App}>
            <CurrentWeatherComponent city={currentCity} data={WeatherData}>
                {WeatherData?.forecast.forecastday.slice(1, 4).map((fd, index) => {
                    return <FutureWeatherComponent
                        Day={Days[(new Date().getDay() + index + 1) % 7]}
                        Icon={fd.day.condition.icon}
                        Temp={fd.day.avgtemp_c}
                        key={index} />;
                })}
            </CurrentWeatherComponent>

            <video
                src={WeatherData?.current.is_day == TimeOfDay.DAY ? daySkyVideo : nightSkyVideo}
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture></video>
        </div>
    );
}

export default App;
