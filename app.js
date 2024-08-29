const apiKey = "f7d182e48a7d73b70b339cba44493917";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkwWather(city) {
  const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
  let data = await response.json();

  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " km/h";
  //document.querySelector(".direction").innerHTML = data.wind.deg + "°";

  switch (data.weather[0].main.toLowerCase()) {
    case "clouds":
      weatherIcon.src = "./images/cloudy.png";
      break;
    case "clear":
      weatherIcon.src = "./images/sun.png";
      break;
    case "rain":
      weatherIcon.src = "./images/rainy.png";
      break;
    case "mist":
      weatherIcon.src = "./images/hail.png";
      break;
    case "haze":
      weatherIcon.src = "./images/partially-sunny.png";
      break;
    default:
      weatherIcon.src = "./images/sunny.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkwWather(searchBox.value);
  searchBox.value = "";
});

//checkwWather();
