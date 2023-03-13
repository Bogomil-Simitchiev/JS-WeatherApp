const inputFieldElement = document.getElementById('msg');

export function clearElements() {
    document.getElementById('temp').textContent = ``;
    document.getElementById('feelsLike').textContent = ``;
    document.getElementById('humidity').textContent = ``;
    document.getElementById('windSpeed').textContent = ``;
    document.getElementById('weather').textContent = ``;
    document.getElementById('city').textContent = ``;
    inputFieldElement.value = '';
    document.getElementById('imgIcon').src = '';
}

const APIICON = `https://openweathermap.org/img/wn/`;

export function setItemsAsCelsium(temp, feels_like, humidity, description, speed, icon,city) {
    //°C
    document.getElementById('temp').textContent = `${temp} °C`;
    document.getElementById('feelsLike').textContent = `${feels_like} °C`;
    document.getElementById('humidity').textContent = `${humidity} %`;
    document.getElementById('windSpeed').textContent = `${speed} km/h`;
    document.getElementById('weather').textContent = `Weather: ${description}`;
    document.getElementById('imgIcon').src = APIICON + icon + '.png';
    document.getElementById('city').textContent = `${city}`;
}
export function setItemsAsFarenheit(temp, feels_like, humidity, description, speed, icon,city) {
    //°F
    document.getElementById('temp').textContent = `${temp} °F`;
    document.getElementById('feelsLike').textContent = `${feels_like} °F`;
    document.getElementById('humidity').textContent = `${humidity} %`;
    document.getElementById('windSpeed').textContent = `${speed} m/s`;
    document.getElementById('weather').textContent = `Weather: ${description}`;
    document.getElementById('imgIcon').src = APIICON + icon + '.png';
    document.getElementById('city').textContent = `${city}`;
}