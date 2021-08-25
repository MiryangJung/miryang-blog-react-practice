export default async function getWeatherByGeo(lat:number | undefined, lon:number | undefined){
    const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
    const result = await fetch(`${weatherAPI}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    return await result.json();
}