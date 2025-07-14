import { WeatherContextList } from "../store/weather-store"
import { useContext, useState, useEffect } from 'react'

export default function Clothes() {
    const { weatherFullDetails } = useContext(WeatherContextList);

    const weatherType = weatherFullDetails?.weather?.[0]?.main;
    const temperature = weatherFullDetails?.main?.temp;

    const [clothes, setClothes] = useState("");

    useEffect(() => {
        if (!weatherType || temperature == null) return;

        if (temperature > 30 && weatherType === "Clear") {
            setClothes("It's hot and sunny. Wear light cotton clothes, sunglasses, and a cap.");
        } else if (temperature > 30.0 && weatherType === "Rain") {
            setClothes("It's hot but raining. Wear light clothes and carry an umbrella.");
        } else if (temperature > 15.0 && temperature <= 30.0 && weatherType === "Clouds") {
            setClothes("Mild weather. Casual wear is good. Carry a light jacket just in case.");
        } else if (temperature <= 15.0 && weatherType === "Clear") {
            setClothes("Chilly but clear. Wear warm clothes, hoodie or sweater.");
        } else if (temperature <= 30.0 && weatherType === "Rain") {
            setClothes("Cold and rainy. Wear warm waterproof jackets and shoes.");
        } else if (temperature < 5.0) {
            setClothes("Very cold! Layer up with thermal wear, coat, gloves, and woolen caps.");
        } else {
            setClothes("Weather is moderate. Dress comfortably.");
        }

    }, [temperature, weatherType]);

    return (
        <div className="clothes-container">
            <h1>Clothes Recommendation</h1>
            <p className="weather">Weather: {weatherType}</p>
            <p className="temperature">Temperature: {temperature}°C</p>
            <p className="clothes"><b>Recommendation :</b> {clothes}</p>
        </div>
    );
}
