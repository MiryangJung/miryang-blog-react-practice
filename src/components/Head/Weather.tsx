import styled from '@emotion/styled';
import React from 'react';
import useWeather from "../../hooks/useWeather";


export default function Weather(){
    const weatherIconAPI = 'http://openweathermap.org/img/wn';
    const currentWeather = useWeather();

    return (
        <>
        {
            currentWeather
            && <WeatherIcon
                alt={currentWeather.weather[0].description}
                src={`${weatherIconAPI}/${currentWeather.weather[0].icon}@2x.png`} />
        }
        </>
    )
}

const WeatherIcon = styled.img`
  width: auto;
  height: 80px;
`;