import { TimeOfDay } from "./Day";

export type CurrentDayWeather = {
    current: {
        temp_c: number;
        is_day: TimeOfDay;
        condition: {
            text: string;
            icon: string;
        }
    }

    forecast: {
        forecastday: FutureDayWeather[];
    }
}

export interface FutureDayWeather  {
    day: {
        avgtemp_c: number;
        condition: {
            icon: string;
        }
    }
}