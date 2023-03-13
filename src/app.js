import { clearElements, setItemsAsCelsium, setItemsAsFarenheit } from "./utils.js";

const btnElement = document.getElementById('btn');
const inputRadioFieldElements = document.querySelectorAll('input[type="radio"]');
const inputFieldElement = document.getElementById('msg');

btnElement.addEventListener('click', (e) => {

    inputRadioFieldElements.forEach(element => {
        if (element.checked) {

            let degree = element.parentNode.querySelector('label').textContent;

            checkDataForTheCurrentCity(degree);
        }
    })
})

async function checkDataForTheCurrentCity(degree) {
    if (inputFieldElement.value != '') {
        switch (degree) {
            case 'Celsium':
                try {
                    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldElement.value}&units=metric&appid=3cd4597820746caedd2c2645b9772367`;
                    let response = await fetch(baseUrl);
                    let data = await response.json();

                    let temp = data['main'].temp;
                    let feels_like = data['main'].feels_like;
                    let humidity = data['main'].humidity;
                    let weatherDesc = data['weather'][0].description;
                    let icon = data['weather'][0].icon;
                    let windSpeed = data['wind'].speed;
                    setItemsAsCelsium(temp, feels_like, humidity, weatherDesc, windSpeed, icon, inputFieldElement.value);
                    inputFieldElement.value = '';

                } catch (error) {
                    console.log(error);
                    alert('Invalid city! Try again..');
                    clearElements();

                }
                break;

            case 'Farenheit':
                try {
                    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldElement.value}&units=imperial&appid=3cd4597820746caedd2c2645b9772367`;
                    let response = await fetch(baseUrl);
                    let data = await response.json();

                    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputFieldElement.value}&units=metric&appid=3cd4597820746caedd2c2645b9772367`);
                    let dataForSpeed = await res.json();

                    let temp = data['main'].temp;
                    let feels_like = data['main'].feels_like;
                    let humidity = data['main'].humidity;
                    let weatherDesc = data['weather'][0].description;
                    let icon = data['weather'][0].icon;
                    let windSpeed = dataForSpeed['wind'].speed;
                    
                    function kmhToMs(kmh) {
                        return kmh * 0.277778; // 1 km/h = 0.277778 m/s
                    }
                    setItemsAsFarenheit(temp, feels_like, humidity, weatherDesc, kmhToMs(windSpeed).toFixed(2), icon, inputFieldElement.value);
                    inputFieldElement.value = '';

                } catch (error) {
                    console.log(error);
                    alert('Invalid city! Try again..');
                    clearElements();
                }
                break;
        }
    }
}