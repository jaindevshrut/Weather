const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
    // const cityDet = data.cityDet;
    // const weather = data.weather;
    // destructure property
    const {cityDet, weather} = data
    details.innerHTML = `<h5 class="my-5">${cityDet.EnglishName}(${cityDet.AdministrativeArea.ID}) ${cityDet.AdministrativeArea.CountryID}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>`

    // removig d-none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    // updating the day/night & icon
    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconsrc);

    var curr = weather.IsDayTime ? 'day.svg' : 'night.svg'  ;
    time.setAttribute('src',`img/${curr}`);
}; 

const updateCity = async(city) =>{
    
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);
    console.log(cityDet,weather)
    return {cityDet, weather};
};
form.addEventListener('submit',e =>{
    e.preventDefault();

    const city = form.city.value.trim();
    form.reset();

    updateCity(city).then(data=>updateUI(data))
                    .catch(err=>console.log(err));
})

