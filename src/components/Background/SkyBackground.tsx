import { FC } from 'react';
import { CurrentDayWeather } from "../../models/Weather";
import { TimeOfDay } from "../../models/Day";
import nightSkyVideo from "../../assets/videos/BlackSky.mp4";
import daySkyVideo from "../../assets/videos/Sky.mp4";

export interface SkyBackgroundProps {
    weatherData: CurrentDayWeather | null;
}

const SkyBackground: FC<SkyBackgroundProps> = ({ ...props }) => {
    return (
        <video
            src={props.weatherData?.current.is_day === TimeOfDay.DAY ? daySkyVideo : nightSkyVideo}
            loop
            muted
            autoPlay
            playsInline
            disablePictureInPicture></video>
    );
};

export default SkyBackground;