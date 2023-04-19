import React, { FC, PropsWithChildren } from 'react';
import { TodayWeather } from "../../models/TodayWeather";
import styles from "./CurrentWeatherComponent.module.css";

export interface CurrentWeatherComponentProps {
    city: string;
    data?: TodayWeather;
}

const CurrentWeatherComponent: FC<PropsWithChildren<CurrentWeatherComponentProps>> = ({ children, ...props }) => {
    return (
        <div className={styles.CurrentWeather} {...props}>
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
                {children}
            </div>
        </div>
    );
};

export default CurrentWeatherComponent;