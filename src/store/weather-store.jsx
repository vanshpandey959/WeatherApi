import { createContext, useReducer, useState } from "react";


export const WeatherContextList = createContext({
    city: "",
    searchCity: () => {},
    weatherFullDetails: null,
    setWeatherFullDetails: () => {},
});


const cityReducer = (currCity, action) => {
    let newCity = currCity
    if (action.type === 'SEARCH_CITY') {
        newCity = action.payload.city;
    }
    return newCity;
}

export const WeatherContextProvider = ({ children }) => {

    const [city, dispatch] = useReducer(cityReducer, "")

    const [weatherFullDetails, setWeatherFullDetails] = useState(null)

    const searchCity = (city) => {
        dispatch({
            type: 'SEARCH_CITY',
            payload: {
                city: city
            }
        })
    }

    return <WeatherContextList.Provider value={
        {
            city: city, searchCity: searchCity, weatherFullDetails, setWeatherFullDetails
        }}>
        {children}
    </WeatherContextList.Provider>
}