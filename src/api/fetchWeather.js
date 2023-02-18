import axios from "axios";
const URI = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '9ea926f85fd0b263152bc79bf270f78c';

export const fetchWeather = async (query)=>{
    const { data } = await axios.get(URI, {
        params:{
            q:query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data;
}