const searchBtn = document.getElementById('searchBtn');

const getData = () => {
    const userData = document.getElementById('userSearch').value;
    document.getElementById('userSearch').value = "";
    fetchWeather(userData);

}

const fetchWeather = async (recieveUserData) => {
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${recieveUserData}&appid=fa1114b3a8f7d466c4c0cab5df041644`);
    const result = await weatherData.json();
    console.log(result.name);

    const temperature = (result.main.temp - 273.5).toFixed(2);
    console.log(temperature, typeof temperature);
    document.getElementById('temp').innerText = temperature;

    document.getElementById('cityName').innerText = result.name;
    document.getElementById('badgeId').innerText = result.sys.country;

}

searchBtn.addEventListener("click", getData);

// fa1114b3a8f7d466c4c0cab5df041644
