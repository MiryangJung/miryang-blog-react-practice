import {useEffect, useState} from "react";
import getWeatherByGeo from "../api/getWeatherByGeo";
import getWeatherByCity from "../api/getWeatherByCity";

export default function useWeather(){
    const [lat, setLat] = useState<number>(37.5665);
    const [lon, setLon] = useState<number>(126.9780);
    const [city, setCity] = useState<string>("Seoul");
    const [data, setData] = useState<any>();

    useEffect(()=>{
        const fetchData = async () => {
            if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(function(position: GeolocationPosition) {
                    setLat(position.coords.latitude);
                    setLon(position.coords.longitude);
                });

                setData(await getWeatherByGeo(lat,lon));
            }else{
                setCity("Seoul");

                setData(await getWeatherByCity(city));
            }
        }

        fetchData();

    }, [lat, lon, city])

    return data;
}