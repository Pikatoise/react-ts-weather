import { TimeOfDay } from "./TimeOfDay";

export type Weather = {
    current: {
        temp_c: number;
        is_day: TimeOfDay;
        condition: {
            text: string;
            icon: string;
        }
    }

    forecast: {
        forecastday: FutureDay[];
    }
}

export interface FutureDay  {
    day: {
        avgtemp_c: number;
        condition: {
            icon: string;
        }
    }
}