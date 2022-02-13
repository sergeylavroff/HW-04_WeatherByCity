import React from "react";
import "../styles/InputCity.css";
import RenderWeather from "./RenderWeather";
import CityInputForm from "./CityInputForm";



function InputCity() {
    const [cityForm, setCityForm] = React.useState('');
    const [cityCoords, setCityCoords] = React.useState('');
    console.log({cityForm})

    const onFormSubmit = (newValue) => {
        setCityForm(newValue);
    }
    const responceCoords = (newValue) => {
        setCityCoords(newValue);
        console.log(cityCoords);
    }

    return <>
        <CityInputForm onFormSubmit = { onFormSubmit }/>

        <RenderWeather cityForm={ cityForm } responceCoords = { responceCoords } />
    </>
};


export default InputCity;