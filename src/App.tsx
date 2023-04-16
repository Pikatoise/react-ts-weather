import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import nightSkyVideo from "./assets/videos/BlackSky.mp4";
import daySkyVideo from "./assets/videos/Sky.mp4";
import axios from "axios";
import Weather from "./Weather.js";

function App() {
    type WeatherApiData = {
        current: {
            temp_c: number;
            condition: {
                icon: string;
            };
        };
    };

    const [url, setUrl] = useState("");

    useEffect(() => {
        GetWeather();
    }, []);

    async function GetWeather() {
        const response = await axios.get<WeatherApiData>(
            `http://api.weatherapi.com/v1/current.json?key=${Weather.data}&q=London&aqi=no`
        );

        setUrl(response.data.current.condition.icon);
        console.log(response.data.current.temp_c);
        console.log(response);
    }
    return (
        <div className={styles.App}>
            <img src={url} />
        </div>
    );
}

export default App;
