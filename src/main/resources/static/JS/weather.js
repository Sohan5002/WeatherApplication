document.addEventListener("DOMContentLoaded", () => {
    const MAIN_TO_OWM = {
        Clear: '01d',
        Clouds: '03d',
        Rain: '09d',
        Drizzle: '09d',
        Thunderstorm: '11d',
        Snow: '13d',
        Mist: '50d',
        Smoke: '50d',
        Haze: '50d',
        Dust: '50d',
        Fog: '50d',
        Sand: '50d',
        Ash: '50d',
        Squall: '50d',
        Tornado: '50d'
    };

    function iconUrlFor(main, apiIconFallback) {
        if (MAIN_TO_OWM[main]) {
            return `https://openweathermap.org/img/wn/${MAIN_TO_OWM[main]}@2x.png`;
        }






        if (apiIconFallback) {
            return `https://openweathermap.org/img/wn/${apiIconFallback}@2x.png`;
        }
        return 'https://openweathermap.org/img/wn/01d@2x.png'; // default sunny
    }
    const weatherRoot = document.getElementById('weatherRoot');
    if (weatherRoot) {
        const main = weatherRoot.getAttribute('data-main');
        const apiIcon = weatherRoot.getAttribute('data-icon');
        const mainImg = document.getElementById('mainWeatherIcon');
        if (mainImg) {
            mainImg.src = iconUrlFor(main, apiIcon);
            mainImg.alt = main || 'weather';
        }
    }


    const form = document.querySelector("form");
    if (form) {
        const input = document.querySelector("input[name='city']");
        const resultContainer = document.createElement("div");
        resultContainer.id = "weatherResult";
        resultContainer.classList.add("mt-4");
        form.parentNode.appendChild(resultContainer);

        // Function to display weather data
        function displayWeather(data) {
            const { name, sys, main, weather, wind } = data;
            const weatherMain = weather[0].main;
            const apiIcon = weather[0].icon;
            const mappedIcon = iconUrlFor(weatherMain, apiIcon);

            resultContainer.innerHTML = `
                <div class="card shadow">
                    <div class="card-body text-center">
                        <img src="${mappedIcon}" alt="${weatherMain}" style="width:96px;height:96px;object-fit:contain;margin-bottom:8px;">
                        <h2 class="card-title">${name}, ${sys.country}</h2>
                        <p class="card-text"><strong>${weather[0].description}</strong></p>
                        <p class="card-text"><strong>Temperature:</strong> ${main.temp}°C</p>
                        <p class="card-text"><strong>Feels like:</strong> ${main.feels_like}°C</p>
                        <p class="card-text"><strong>Humidity:</strong> ${main.humidity}%</p>
                        <p class="card-text"><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
                    </div>
                </div>
            `;
        }





        function displayError(message) {
            resultContainer.innerHTML = `
                <div class="alert alert-danger">
                    <strong>Error:</strong> ${message}
                </div>
            `;
        }

        // Function to show loading
        function showLoading() {
            resultContainer.innerHTML = `
                <div class="alert alert-info">
                    Loading...
                </div>
            `;
        }

        // Handle form submit
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const city = input.value.trim();

            if (!city) {
                displayError("Please enter a city name.");
                return;
            }




            showLoading();

            try {
                const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("City not found.");
                    } else {
                        throw new Error("Enter Correct Name");
                    }
                }

                const data = await response.json();
                displayWeather(data);
            } catch (error) {
                displayError(error.message);
            }
        });
    }
});
