import React, { FC, PropsWithChildren } from 'react';
import { TodayWeather } from "../../models/TodayWeather";

export interface CurrentWeatherComponentProps {
    currentData?: TodayWeather;
}

const CurrentWeatherComponent: FC<PropsWithChildren<CurrentWeatherComponentProps>> = ({ children, ...props }) => {
    return (
        <div>CurrentWeatherComponent</div>
    );
};

export default CurrentWeatherComponent;