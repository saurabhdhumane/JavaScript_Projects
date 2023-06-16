const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const form = document.querySelector("form")
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const detailsTable = document.querySelector("#details");


const getWeather = async (city) => {
    weather.innerHTML = `<h3>Loading..</h3>`

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    // console.log(response)
    const data = await response.json();
    console.log(data)
    return showWeather(data)
}


const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h3>City Not Found</h3>`
        return;
    }
    console.log(data)
    weather.innerHTML = ` 
    <h5>${data.name}</h5>

        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h4> ${data.weather[0].main} </h4>
        <h5>${data.weather[0].description}</h5>
    </div>
    `
    detailsTable.innerHTML = `
                <thead class="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">City Name</th>
                    <td>${data.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Country</th>
                    <td>${data.sys.country}</td>

                  </tr>
                  <tr>
                    <th scope="row">Latitude</th>
                    <td>${data.coord.lat}</td>
                  </tr>
                  <tr>
                    <th scope="row">Longitude</th>
                    <td>${data.coord.lon}</td>
                  </tr>
                  <tr>
                    <th scope="row">Ground Level</th>
                    <td>${data.main.grnd_level}</td>
                  </tr>
                  <tr>
                    <th scope="row">Humidity</th>
                    <td>${data.main.humidity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Pressure</th>
                    <td>${data.main.pressure}</td>
                  </tr>
                  <tr>
                    <th scope="row">Sea Level</th>
                    <td>${data.main.sea_level}</td>
                  </tr>
                  <tr>
                    <th scope="row">Temperature</th>
                    <td>${data.main.temp}</td>
                  </tr>
                  <tr>
                    <th scope="row">Temperature(MIN)</th>
                    <td>${data.main.temp_min}</td>
                  </tr>
                  <tr>
                    <th scope="row">Temperature(Max)</th>
                    <td>${data.main.temp_max}</td>
                  </tr>
                  <tr>
                    <th scope="row">Wind Speed</th>
                    <td>${data.wind.speed}</td>
                  </tr>
                </tbody>
    `
    
}
form.addEventListener(
    "submit",
    function (event) {
        // console.log(search.value)
        getWeather(search.value)
        event.preventDefault();
    }
)

getWeather("Pune")




