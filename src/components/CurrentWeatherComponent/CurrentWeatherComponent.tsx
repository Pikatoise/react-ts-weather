import { FC } from 'react';
import { CurrentDayWeather } from "../../models/Weather";
import { WeekDays } from "../../models/Day";
import FutureWeatherComponent from "../FutureWeatherComponent/FutureWeatherComponent";
import styles from "./CurrentWeatherComponent.module.css";

export interface CurrentWeatherComponentProps {
    city: string;
    data: CurrentDayWeather | null;
}

const CurrentWeatherComponent: FC<CurrentWeatherComponentProps> = ({ ...props }) => {
    return (
        <div className={styles.CurrentWeather}>
            <div className={styles.WeatherIcon}>
                <img
                    src={props.data?.current.condition.icon}
                    alt={props.data?.current.condition.text}
                    draggable={false}
                />
            </div>

            <div className={styles.WeatherInfo}>
                <div className={styles.Day}>
                    Сегодня
                </div>

                <div className={styles.City}>
                    {props.city}
                </div>

                <div className={styles.Temperature}>
                    Температура: <span>{props.data?.current.temp_c}℃</span>
                </div>

                <div className={styles.Description}>
                    {props.data?.current.condition.text}
                </div>
            </div>

            <div className={styles.Future}>
                {props.data?.forecast.forecastday.slice(1, 5).map((fd, index) => {
                    return <FutureWeatherComponent
                        Day={WeekDays[(new Date().getDay() + index + 1) % 7]}
                        Icon={fd.day.condition.icon}
                        Temp={fd.day.avgtemp_c}
                        key={index} />;
                })}
            </div>
        </div>
    );
};

export default CurrentWeatherComponent;