export default async function getWeatherByCity(city:string | undefined){
    const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
    const result = await fetch(`${weatherAPI}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    return await result.json();
}