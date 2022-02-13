import * as React from "react";
import axios from "axios";
import "../styles/GetWeather.css";


function GetWeather(props) {
    const API_KEY = process.env.WEATHER_API_KEY;
    let inputCity = "props.city";
    let [cityWeather, getCityWeather] = React.useState([]);
    if(!cityWeather.length) axios.get(`api.openweathermap.org/data/2.5/weather?q=${ inputCity }&appid=${ API_KEY }`).then(data => { getCityWeather(data.data) } );
    
    return ( 
            <>
            {cityWeather}
            </>
        );
    }


export default GetWeather;