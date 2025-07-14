import { useState, useEffect, useContext } from 'react';
import Detail from './Detail';
import { WeatherContextList } from '../store/weather-store';

export default function DetailList() {
    const { city, setWeatherFullDetails , weatherFullDetails} = useContext(WeatherContextList);

    const [searched, setSearched] = useState(false);

    useEffect(() => {
        if (!city) return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=739d2af462336fd6222ad6cc8a37affe&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                setSearched(true);
                setWeatherFullDetails(data);
                console.log(data)
            })
            .catch(() => {
                setSearched(true);
                setWeatherFullDetails(null);
            });
    }, [city]);

    return (
        <div className="mid-container">
            {!searched && (
                <h3 className="text-center text-muted">🔍 Search your favorite city above!</h3>
            )}

            {searched && weatherFullDetails?.cod === "404" && (
                <h5 className="text-center text-light fs-1 m-5">OOPS! No city found for "{city}"</h5>
            )}

            {searched && weatherFullDetails?.cod !== "404" && (
                    <Detail weatherFullDetails={weatherFullDetails} />
            )}
        </div>
    );
}
