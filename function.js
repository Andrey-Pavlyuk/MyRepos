class Worker {
    constructor(options) {
        this.firstName = options.firstName
        this.lastName = options.lastName
        this.rate = options.rate
        this.hours = options.hours
        this.overtime = options.overtime
    }

    get fullName() {
        return `FirstName: ${this.firstName},  LastName: ${this.lastName}.`
    }

    get salary() {
        return this.rate * this.hours;
    }
}

class SoftwareEngineer extends Worker {
    constructor(options) {
        super(options);
        this.position = options.position
        this.role = options.role
        this.skills = options.skills
    }

    get bonusCoefficient() {
        let coef1, coef2;
        const listCoefOfPosition = {
            'Junior': 1.2,
            'Middle': 1.5,
            'Senior': 1.8,
        }
        const listCoefOfRole = {
            'Backend': 0.2,
            'Frontend': 0.3,
            'Fullstack': 0.4,
        }
        for (let index in listCoefOfPosition) {
            if (index === this.position) {
                coef1 = listCoefOfPosition[index];
            }
        }
        for (let index in listCoefOfRole) {
            if (index === this.role) {
                coef2 = listCoefOfRole[index];
            }
        }
        return coef1 + coef2;
    }

    get bonus() {
        return worker.overtime * (worker.rate * 2) * this.bonusCoefficient;
    }

    get fullSalary() {
        return worker.salary + this.bonus;
    }
}

const FormRegistrationWorker = document.getElementById('FormRegistrationWorker');
const FormRegistrationSoftwareEngineer = document.getElementById('FormRegistrationSoftwareEngineer')
const containerInfo = document.getElementById('container-info')
let info;

function createHeader(info, h2P) {
    let header = []
    let h2

    for (let i = 0; i < 1; i++) {
        h2 = document.createElement('h2')
        header.push(h2)
    }

    h2.innerHTML = h2P
    h2.style.textAlign = 'center'
    h2.style.fontFamily = 'Arial", sans-serif'
    h2.style.fontStyle = 'italic'
    h2.style.letterSpacing = '3px'

    header.forEach(i => info.appendChild(i))
}

function creationInfo(h2P, func) {
    let arrayInfoDiv = []
    for (let i = 0; i < 1; i++) {
        info = document.createElement('div')
        arrayInfoDiv.push(info)
    }

    info.style.backgroundColor = '#ECF1EF'
    info.style.borderRadius = '10px'
    info.style.padding = '15px'
    info.style.marginTop = '20px'
    info.style.marginLeft = '50px'
    info.style.marginBottom = '20px'
    info.style.border = '2px solid plum'
    info.style.height = '300px'
    info.style.width = '400px'

    arrayInfoDiv.forEach(i => containerInfo.appendChild(i))
    createHeader(info, h2P)
    func()
}

function createP() {
    let arrayP1 = []
    for (let i = 0; i < 7; i++) {
        let p = document.createElement('p')
        p.style.marginBottom = '10px'
        p.style.fontSize = '20px'
        arrayP1.push(p)
    }

    arrayP1[0].innerHTML = 'Имя: ' + worker.firstName
    arrayP1[1].innerHTML = 'Фамилия: ' + worker.lastName
    arrayP1[2].innerHTML = 'Ставка: ' + worker.rate
    arrayP1[3].innerHTML = 'Количество отработанных часов:  ' + worker.hours + ' ч.'
    arrayP1[4].innerHTML = 'Количество переработаных часов:  ' + worker.overtime + ' ч.'
    arrayP1[5].innerHTML = worker.fullName
    arrayP1[6].innerHTML = 'Salary: ' + worker.salary + '$'

    arrayP1.forEach(i => info.appendChild(i))
}

function createNewP() {
    let arrayP2 = []
    for (let i = 0; i < 6; i++) {
        let p = document.createElement('p')
        p.style.marginBottom = '10px'
        p.style.fontSize = '20px'
        arrayP2.push(p)
    }
    arrayP2[0].innerHTML = 'Position: ' + softwareEngineer.position
    arrayP2[1].innerHTML = 'Role: ' + softwareEngineer.role
    arrayP2[2].innerHTML = 'Your list skills: ' + softwareEngineer.skills
    arrayP2[3].innerHTML = 'Coefficient: ' + softwareEngineer.bonusCoefficient
    arrayP2[4].innerHTML = 'Bonus: ' + Math.round(softwareEngineer.bonus)
    arrayP2[5].innerHTML = 'FullSalary: ' + Math.round(softwareEngineer.fullSalary) + '$.'
    arrayP2.forEach(i => info.appendChild(i))
}

const regFormSubmitHandlerWorker = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('first-name')
    const lastName = formData.get('last-name')
    const rate = formData.get('rate')
    const hours = formData.get('hours')
    const h2P = 'Info:'
    let overtime = 0

    if(hours > 160){
        overtime = hours - 160
    }

    window.worker = new Worker({
        firstName: firstName,
        lastName: lastName,
        rate: rate,
        hours: hours,
        overtime: overtime
    })
    creationInfo(h2P, createP)
}

const regFormSubmitHandlerSoftwareEngineer = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedPosition = formData.get('selectPosition')
    const selectedRole = formData.get('selectRole')
    const textarea = formData.get('textarea')
    const h2P = 'Your status in company:'

    window.softwareEngineer = new SoftwareEngineer({
        position: selectedPosition,
        role: selectedRole,
        skills: textarea
    })
    creationInfo(h2P, createNewP)
}

FormRegistrationWorker.addEventListener("submit", regFormSubmitHandlerWorker)
FormRegistrationSoftwareEngineer.addEventListener("submit", regFormSubmitHandlerSoftwareEngineer)


