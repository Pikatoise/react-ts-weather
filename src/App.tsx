import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import nightSkyVideo from "./assets/videos/BlackSky.mp4";
import daySkyVideo from "./assets/videos/Sky.mp4";
import axios from "axios";
import Weather from "./Weather.js";
import { TimeOfDay } from "./models/TimeOfDay";
import { TodayWeather } from "./models/TodayWeather";

function App() {
    const [currentCity, setCurrentCity] = useState<string>("Орск");
    const [todayWeatherData, setTodayWeatherData] = useState<TodayWeather | null>(null);

    // axios.get(`http://api.weatherapi.com/v1/search.json?key=${Weather.data}&q=orsk&`).then(response => console.log(response.data));

    useEffect(() => {
        GetTodayWeather();
    }, [currentCity]);

    async function GetTodayWeather() {
        axios.get<TodayWeather>(`http://api.weatherapi.com/v1/current.json?key=${Weather.data}&q=${currentCity}&aqi=no&lang=ru`)
            .then(response => {
                setTodayWeatherData(response.data);
                console.log("1");
            });
    }

    return (
        <div className={styles.App}>
            <div className={styles.test}>

            </div>
            <video
                src={todayWeatherData?.current.is_day == TimeOfDay.DAY ? daySkyVideo : nightSkyVideo}
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture></video>
        </div>
    );
}

export default App;
