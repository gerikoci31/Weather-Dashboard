// Get all elements with the 'title' class
const titles = document.querySelectorAll('.title');

// Loop through each title element
titles.forEach(title => {
    // Set the style attributes for each title
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.color = 'blue';
    title.style.fontSize = '24px';
});






//Make a Request to Geocoding API:

const city = 'New York';
const geocodingApiKey = 'YOUR_GEOCODING_API_KEY';
const geocodingApiUrl = `https://api.geocodingapi.com/geocode?q=${city}&key=${geocodingApiKey}`;

fetch(geocodingApiUrl)
  .then(response => response.json())
  .then(data => {
    const latitude = data.results[0].geometry.lat;
    const longitude = data.results[0].geometry.lng;
    
    // Use latitude and longitude to fetch weather data from OpenWeatherMap API
  })
  .catch(error => console.error('Error fetching coordinates:', error));

//Pass Coordinates to OpenWeatherMap API:

const openWeatherMapApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}`;

fetch(openWeatherMapApiUrl)
  .then(response => response.json())
  .then(weatherData => {
    // Process and display weather data in your weather dashboard
  })
  .catch(error => console.error('Error fetching weather data:', error));