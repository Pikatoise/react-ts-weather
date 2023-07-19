import axios from "axios";
import { Dispatch } from "react";
import City from "../models/City";
import { CurrentDayWeather } from "../models/Weather";

export async function GetWeather(callback: Dispatch<React.SetStateAction<CurrentDayWeather | null>>, currentCity: string) {
    try {
        axios.get<CurrentDayWeather>(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${currentCity}&days=3&aqi=no&alerts=no&lang=ru`)
            .then(response => {
                callback(response.data);
            });
    }
    catch (e) {
        console.log(e);
    }
}

export async function GetCities(callback: Dispatch<React.SetStateAction<City[]>>, inputCity: string) {
    try {
        axios.get<City[]>(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=${inputCity}&lang=ru`)
            .then(response => {
                callback(response.data);
            });
    }
    catch (e) {
        console.log(e);
    }
}