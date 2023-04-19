import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import nightSkyVideo from "./assets/videos/BlackSky.mp4";
import daySkyVideo from "./assets/videos/Sky.mp4";
import axios from "axios";
import Weather from "./Weather.js";
import { TimeOfDay } from "./models/TimeOfDay";
import { TodayWeather } from "./models/TodayWeather";
import CurrentWeatherComponent from "./components/CurrentWeatherComponent/CurrentWeatherComponent";

function App() {
    const [currentCity, setCurrentCity] = useState<string>("Орск");
    const [WeatherData, setWeatherData] = useState<TodayWeather | null>(null); //{ current: { temp_c: 0, is_day: TimeOfDay.DAY, condition: { icon: "", text: "" } } }

    // axios.get(`http://api.weatherapi.com/v1/search.json?key=${Weather.data}&q=orsk&`).then(response => console.log(response.data));

    useEffect(() => {
        GetWeather();
    }, [currentCity]);

    async function GetWeather() {
        axios.get<TodayWeather>(`http://api.weatherapi.com/v1/forecast.json?key=${Weather.data}&q=${currentCity}&days=5&aqi=no&alerts=no&lang=ru`)
            .then(response => {
                console.log(response.data);
                setWeatherData(response.data);
            });
    }

    return (
        <div className={styles.App}>
            <CurrentWeatherComponent city={currentCity} data={WeatherData}>

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
