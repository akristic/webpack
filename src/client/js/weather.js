export function getWeather(url) {
    console.log("::: getWeather :::", url);
    const getWeatherData = async ( url = '')=>{
        const response = await fetch(url);
        try {
          const newData = await response.json();
          document.getElementById('results').innerHTML = "temp today: " + newData.main.temp
          return newData;
        }catch(error) {
        console.log("error", error);
        }
    }
    getWeatherData(url)
}
