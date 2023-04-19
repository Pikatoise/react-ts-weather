import React, { FC } from 'react';
import styles from "./FutureWeatherComponent.module.css";

export interface FutureWeatherComponentProps {
    Day: string;
    Temp: number;
    Icon: string;
}

const FutureWeatherComponent: FC<FutureWeatherComponentProps> = ({ ...props }) => {
    return (
        <div className={styles.FutureWeather}>
            <div className={styles.Title}>
                {props.Day}
            </div>

            <div className={styles.WeatherIcon}>
                <img
                    src={props.Icon}
                    alt="weather icon"
                    draggable={false} />
            </div>

            <div className={styles.Temperature}>
                {props.Temp}℃
            </div>
        </div>
    );
};

export default FutureWeatherComponent;