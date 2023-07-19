import { useEffect, useState } from 'react';
import styles from "./MainPage.module.css";
import ClearSelectComponent from "../../components/select/ClearSelectComponent/ClearSelectComponent";
import CurrentWeatherComponent from "../../components/CurrentWeatherComponent/CurrentWeatherComponent";
import SkyBackground from "../../components/Background/SkyBackground";
import { GetWeather, GetCities } from "../../hooks/WeatherAPI";
import { CurrentDayWeather } from "../../models/Weather";
import City from "../../models/City";

const MainPage = () => {
    const [currentCity, setCurrentCity] = useState<string>("Орск");
    const [inputCity, setInputCity] = useState<string>("");
    const [weatherData, setWeatherData] = useState<CurrentDayWeather | null>(null);
    const [cities, setCities] = useState<City[]>([]);

    useEffect(() => {
        GetWeather(setWeatherData, currentCity);
    }, [currentCity]);

    useEffect(() => {
        if (inputCity.length > 0)
            GetCities(setCities, inputCity);
    }, [inputCity]);

    return (
        <div className={styles.mainPage}>
            <ClearSelectComponent
                cities={cities}
                onChangeInput={setInputCity}
                onClickCity={setCurrentCity}
                valueInput={inputCity} />

            <CurrentWeatherComponent
                city={currentCity}
                data={weatherData} />

            <SkyBackground weatherData={weatherData} />
        </div>
    );
};

export default MainPage;