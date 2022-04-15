let temperature = document.querySelector("#temperature")
let description = document.querySelector("#description")
let imgClouds = document.querySelector("#imgClouds")
let title = document.querySelector("#title")

let cityName = document.querySelector("#cityName")
let search = document.querySelector("#search")

search.addEventListener("click", searchCity)
async function searchCity(){
    myCity = cityName.value;
    myCity = myCity.replace(' ', '');
    fetch(`https://goweather.herokuapp.com/weather/${myCity}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            temperature.innerHTML = data.temperature
            description.innerHTML = data.description
            title.innerHTML = cityName.value;
            if (data.description.toLowerCase().includes("cloud")){
                imgClouds.src = "./img/partly-cloudy.png"
            }else if(data.description.toLowerCase().includes("sun")){
                imgClouds.src = "./img/sunny.png"
            }else if(data.description.toLowerCase().includes("rain")){
                imgClouds.src = "./img/raining.png"
            }else if(data.description.toLowerCase().includes("snow")){
                imgClouds.src = "./img/heavy-snow.png"
            }
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
// searchCity();