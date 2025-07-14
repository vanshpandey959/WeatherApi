

export default function Detail({ weatherFullDetails }) {
    

    const { name, weather, main, sys } = weatherFullDetails;

    return (
        <div className="weather-container">
            <div className="city">{name}</div>
            
            <div className="details">
                <h5 className="desc">{weather?.[0]?.main} | {weather?.[0]?.description}</h5>
                <p className="temp">{main?.temp}°C</p>
                <img className="temp-img"
                    src={`https://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`}
                    alt="weather icon"
                />
            </div>
            <div className="min-max">
                <div className="min"><h4>Min Temp</h4> {main?.temp_min}</div>
                <div className="max"><h4>Max Temp</h4> {main?.temp_max}</div>
            </div>

        </div>
    );
}
