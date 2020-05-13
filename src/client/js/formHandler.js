export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::");
    Client.getWeather('https://api.openweathermap.org/data/2.5/weather?zip=94203&appid=28736653ad6c42f248388523a9ff3d0e');   
}

