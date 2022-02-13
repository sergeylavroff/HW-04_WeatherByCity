import React from "react";




function RenderWeather({ cityForm, responceCoords }) {
const [error, setError] = React.useState(null);
const [isLoaded, setIsLoaded] = React.useState(false);
const [cityWeather, setCityWeather] = React.useState({});
const [tempData, setTempData] = React.useState({});
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getWeather = (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${API_KEY}`)
        .then(data => data.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setCityWeather(result);
                setTempData(result.main);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
}

React.useEffect(() => {
    if (cityForm) {
    getWeather(cityForm)
}
    else
    getWeather('Vladimir')
 }, [cityForm])

if (error) {
    return <div>Ошибка {error.message}</div>;
} else if (!isLoaded) {
    return <div>Загрузка...</div>;
} else if (!tempData) {
    return <div>Город не найден.</div>
} else {
    responceCoords(cityWeather.coord);
    return (
        <div>
                        <span>  name is: { cityForm } </span>
                        <span> Visibility range is: { cityWeather.visibility }</span>
                        <span> Temperature is: { (tempData.temp - 273).toFixed(0) } celcius </span>
                        <span> Feels like range is: { (tempData.feels_like - 273).toFixed(0) } celsius   </span>
        </div>
      );
}
}

export default RenderWeather;