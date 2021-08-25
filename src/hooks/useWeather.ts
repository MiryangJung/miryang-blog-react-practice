import {useEffect, useState} from "react";

export default function useWeather(){
    const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
    const [lat, setLat] = useState<number>();
    const [lon, setLon] = useState<number>();

    useEffect(()=>{
        const fetchData = async () => {
            if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(function(position: GeolocationPosition) {
                    setLat(position.coords.latitude);
                    setLon(position.coords.longitude);
                });
            }

            await fetch(`${weatherAPI}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        }


        console.log("Latitude is:", lat)
        console.log("Longitude is:", lon)
    }, [lat,lon])

}