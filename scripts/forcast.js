const key = 'QIdZnSLXEdi5EKXAARdAk3BGHcg2G0QF';

//get weather
const getWeather = async(id)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const weather = await response.json();
    return weather[0]
}


//get city
const getCity = async(city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0]
}
