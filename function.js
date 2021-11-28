function myFunc() {
    while (true) {
        let name = prompt('Имя:')
        let age = prompt('Возраст:')
        let profession = prompt('Ваша професия:')
        let dish = prompt('Любимое блюдо:')
        if(window.confirm(`Потвердить данные:\nИмя: ${name}\nВозраст: ${age}\nПрофессия: ${profession}\nЛюбимое блюдо: ${dish}`)){
            break
        }
    }
}

myFunc()