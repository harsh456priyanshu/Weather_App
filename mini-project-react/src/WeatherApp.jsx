import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState} from "react";

export default function WeatherApp() {
    const [weatherInfo ,  setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 24.44,
        tempMax: 25.56,
        humidity: 89,
        weather: "Hase"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}> 
            <h2>Weather App by Priyanshu Raj</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info= {weatherInfo} />
        </div>
    )
}