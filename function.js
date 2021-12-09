let main = document.getElementById('main')
let h1 = document.createElement('h1')
let loader = document.getElementById('loader-start')
const url = 'https://jsonplaceholder.typicode.com/users'
const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}
async function creatorUserList() {
    await delay(2000)
    const promise = await fetch(url)
        .then(response => response.json())
        .then((array) => {
            main.style.border = ' 1px solid white'
            h1.style.fontSize = '25px'
            h1.style.marginTop = '10px'
            h1.innerHTML = 'List of Users from fetch request: '
            main.appendChild(h1)

            for (let i = 0; i < array.length; i++) {
                let p = document.createElement('p')
                p.innerHTML = array[i].username
                p.style.fontSize = '20px'
                p.style.marginTop = '10px'
                main.appendChild(p)
                loader.style.display = 'none'
            }
        })
}

creatorUserList().then()

