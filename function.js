// api.openweathermap.org/data/2.5/weather
//     ? - начало get запроса
//     q=London,uk
//     &
//     appid=35aba4f0dd76a8fdb6c54c809701fc13  - ключ api

const FormGetCity = document.getElementById('FormGetCity')
const containerInfo = document.getElementById('container-info')

async function getCityWeather() {
    let idCity = null
    await fetch("city.list.json")
        .then(response => response.json())
        .then((data) => {
            data.forEach(i => {
                if (city === i.name) {
                    idCity = i.id
                }
            })
        })
    const resultOfRequestCurrentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=35aba4f0dd76a8fdb6c54c809701fc13`)
    return await resultOfRequestCurrentWeather.json()
}

function createInfo(content){
    const arrayP = []
    const h1 = document.createElement('h1')
    containerInfo.style.display = 'block'
    h1.innerHTML = city.toString()
    h1.style.marginTop = '10px'
    h1.style.marginBottom = '10px'

    for (let i = 0; i < 8; i++) {
        let p = document.createElement('p')
        p.style.marginBottom = '10px'
        p.style.fontSize = '20px'
        arrayP.push(p)
    }

    Promise.all([content]).then(value => {
        value.forEach(i => {
            arrayP[0].innerHTML = `Температура: ${Math.round(i.main.temp - 273)} &deg;`
            arrayP[1].innerHTML = `Давление: ${i.main.pressure} мм`
            arrayP[2].innerHTML = `Влажность: ${i.main.humidity} %`
            arrayP[3].innerHTML = `Скорость ветра: ${i.wind.speed} м/с`
            arrayP[4].innerHTML = `Видимость: ${Math.round(i.visibility / 1000)} км`
            arrayP[5].innerHTML = `В основном: ${i.weather[0].main}`
            arrayP[6].innerHTML = `Ощущается как: ${Math.round(i.main.feels_like - 273)} &deg;`
            arrayP[7].innerHTML = `<img src="https://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png" alt="imageWeather">`
        })
    })

    containerInfo.appendChild(h1)
    arrayP.forEach(i => containerInfo.appendChild(i))
}

const getInfoHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    window.city = formData.get('city');
    const content = getCityWeather().then();
    containerInfo.innerHTML = ''
    createInfo(content)
}

FormGetCity.addEventListener('submit', getInfoHandler)

