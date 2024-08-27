const apiKey = '021be758c8da2009c58effcfb1bcccad'; 

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <div><strong>City:</strong> ${data.name}</div>
                <div><strong>Temperature:</strong> ${data.main.temp}°C</div>
                <div><strong>Weather:</strong> ${data.weather[0].description}</div>
                <div><strong>Humidity:</strong> ${data.main.humidity}%</div>
                <div><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to retrieve data');
        });
}
