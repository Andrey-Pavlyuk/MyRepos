function myFunc() {
    while (true) {
        prompt('Имя:')
        prompt('Возраст:')
        prompt('Ваша професия:')
        prompt('Любимое блюдо:')
        if(window.confirm('Потвердить данные')){
            break
        }
    }
}

myFunc()