import { FaSearch } from "react-icons/fa";
import { useContext, useRef } from "react";
import { WeatherContextList } from "../store/weather-store";

export default function InputHead() {
    const { searchCity } = useContext(WeatherContextList);
    const searchCityElement = useRef();

    const handleClick = () => {
        const searchedValue = searchCityElement.current.value.trim();
        if (searchedValue) {
            searchCity(searchedValue);
            searchCityElement.current.value = "";
        }
    };

    return (
        <div className="search">
            <input type="text" className="input" placeholder="Search City" ref={searchCityElement} />
            <button type="button" className="button" onClick={handleClick}><FaSearch />
</button>
        </div>
    );
}
