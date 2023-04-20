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
import { City } from "./models/City";
import { ClearSelectComponent } from "./components/select/ClearSelectComponent/ClearSelectComponent";

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
    const [inputCity, setInputCity] = useState<string>("");
    const [weatherData, setWeatherData] = useState<Weather | null>(null);
    const [cities, setCities] = useState<City[]>([]);


    useEffect(() => {
        GetWeather();
    }, [currentCity]);

    useEffect(() => {
        if (inputCity.length > 0) {
            GetCities();
        }
    }, [inputCity]);

    async function GetWeather() {
        try {
            axios.get<Weather>(`http://api.weatherapi.com/v1/forecast.json?key=${WeatherK.data}&q=${currentCity}&days=5&aqi=no&alerts=no&lang=ru`)
                .then(response => {
                    console.log(response.data);
                    setWeatherData(response.data);
                });
        }
        catch (e) {
            console.log(e);
        }
    }

    async function GetCities() {
        try {
            axios.get<City[]>(`http://api.weatherapi.com/v1/search.json?key=${WeatherK.data}&q=${inputCity}&lang=ru`)
                .then(response => {
                    console.log(response.data);
                    setCities(response.data);
                });
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.App}>
            <ClearSelectComponent cities={cities} onChangeInput={setInputCity} onClickCity={setCurrentCity} valueInput={inputCity} />

            <CurrentWeatherComponent city={currentCity} data={weatherData}>
                {weatherData?.forecast.forecastday.slice(1, 4).map((fd, index) => {
                    return <FutureWeatherComponent
                        Day={Days[(new Date().getDay() + index + 1) % 7]}
                        Icon={fd.day.condition.icon}
                        Temp={fd.day.avgtemp_c}
                        key={index} />;
                })}
            </CurrentWeatherComponent>

            <video
                src={weatherData?.current.is_day == TimeOfDay.DAY ? daySkyVideo : nightSkyVideo}
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture></video>
        </div>
    );
}

export default App;
