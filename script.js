const cityname = document.getElementById("cityname");
const weathername = document.getElementById("weathercondition");
const degree = document.getElementById("weatherdegree");
const addicon = document.getElementById("addicon");
const minusicon = document.getElementById("minusicon");
const searchcontainer = document.querySelector(".search");
const searchicon = document.querySelector(".searchicon");
const humidity = document.getElementById("humdityvalue");
const precipitation = document.getElementById("preciptationvalue");
const windspeed = document.getElementById("windspeed");
const weatherimg = document.getElementById("weatherimg");
const d = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

document.getElementById("datetime").innerHTML = `${days[d.getDay()]}
 , ${d.getDate()} ${
  months[d.getMonth()]
}  ${d.getFullYear()} || ${d.getHours()} : ${d.getMinutes()} `;

addicon.onclick = () => {
  searchcontainer.style.height = "70px";

  if (searchcontainer.style.height == "70px") {
    addicon.style.display = "none";
    minusicon.style.display = "block";

    minusicon.addEventListener("click", () => {
      searchcontainer.style.height = "30px";
      minusicon.style.display = "none";
      addicon.style.display = "block";
    });
  }
};

const api = async () => {
  try {
    getcity = document.getElementById("getcity").value;
    key = "1465a9f7809e4e35efecbd63c8e59040";
    url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${getcity}&appid=${key}&units=metric`
    );
    convert = await url.json();
    console.log(convert);
    cityname.innerHTML = convert.name;
    weathername.innerHTML = convert.weather[0].main;
    degree.innerHTML = convert.main.temp;
    humidity.innerHTML = convert.main.humidity;
    windspeed.innerHTML = convert.wind.speed;
    precipitation.innerHTML = convert.clouds.all;
  } catch (error) {
    cityname.innerHTML = "Invalid City Name";
  }
};
