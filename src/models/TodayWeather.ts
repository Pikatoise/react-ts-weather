import { TimeOfDay } from "./TimeOfDay";

export type TodayWeather = {
    current: {
        temp_c: number;
        is_day: TimeOfDay;
        condition: {
            text: string;
            icon: string;
        }
    }

    forecast: {
        
    }
}