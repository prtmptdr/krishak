async function getWeather() {
    let city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    let response = await fetch(`http://localhost:8080/weather?city=${city}`);
    let data = await response.json();

    document.getElementById("temperature").innerText = `${data.temperature}°C`;
    document.getElementById("condition").innerText = `Condition: ${data.condition}`;
    document.getElementById("location").innerText = `Location: ${city}`;
    document.getElementById("weather-icon").src = getIcon(data.condition);

    updateBackground(data.condition);
}

function updateBackground(condition) {
    document.body.className = "default"; // Reset to default
    if (condition.includes("clear")) document.body.className = "sunny";
    else if (condition.includes("cloud")) document.body.className = "cloudy";
    else if (condition.includes("rain")) document.body.className = "rainy";
    else if (condition.includes("snow")) document.body.className = "snowy";
}

function getIcon(condition) {
    if (condition.includes("clear")) return "icons/sunny.png";
    if (condition.includes("cloud")) return "icons/cloudy.png";
    if (condition.includes("rain")) return "icons/rainy.png";
    if (condition.includes("snow")) return "icons/snowy.png";
    return "icons/default.png";
}