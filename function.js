let listOfAttributes = [
    {
        content: 'Frontend Misha',
        id: 'fe',
        relations: ['pm', 'be', 'ds']
    },
    {
        content: 'Design Pasha',
        id: 'ds',
        relations: ['pm', 'fe']
    },
    {
        content: 'Project Manager Sanya',
        id: 'pm',
        relations: ['ba', 'fe', 'be', 'ds']
    },
    {
        content: 'Backend Grisha',
        id: 'be',
        relations: ['pm', 'fe', 'ba']
    },
    {
        content: 'Business Analyst Sveta',
        id: 'ba',
        relations: ['pm']
    }
];
const app = document.querySelector('#app')

const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const div5 = document.createElement('div')

let arrayDiv = []
arrayDiv.push(div1, div2, div3, div4, div5)

function createDiv() {
    for (let i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].style.width = '300px'
        arrayDiv[i].style.height = '50px'
        arrayDiv[i].style.border = '1px solid black'
        arrayDiv[i].style.marginBottom = '10px'
        arrayDiv[i].style.padding = '5px'
        arrayDiv[i].style.textAlign = 'center'
    }
}

function fillDiv() {
    for (let i = 0; i < listOfAttributes.length; i++) {
        arrayDiv[i].innerHTML = listOfAttributes[i].content
        arrayDiv[i].setAttribute('id', listOfAttributes[i].id)
    }
}

createDiv()
fillDiv()

app.appendChild(div1)
app.appendChild(div2)
app.appendChild(div3)
app.appendChild(div4)
app.appendChild(div5)

let arrayOfRelations1 = [];
let arrayOfRelations2 = [];
let arrayOfRelations3 = [];
let arrayOfRelations4 = [];
let arrayOfRelations5 = [];

arrayOfRelations1.push(listOfAttributes[0].relations);
arrayOfRelations2.push(listOfAttributes[1].relations);
arrayOfRelations3.push(listOfAttributes[2].relations);
arrayOfRelations4.push(listOfAttributes[3].relations);
arrayOfRelations5.push(listOfAttributes[4].relations);

arrayOfRelations1 = arrayOfRelations1.flat();
arrayOfRelations2 = arrayOfRelations2.flat();
arrayOfRelations3 = arrayOfRelations3.flat();
arrayOfRelations4 = arrayOfRelations4.flat();
arrayOfRelations5 = arrayOfRelations5.flat();

function toWhite(){
    for (let i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].style.backgroundColor = 'white'
    }
}

document.getElementById('fe')
    .addEventListener('click', function (event) {
        div1.classList.toggle('changerBackOnOrange')
        for (let i = 0; i < arrayDiv.length; i++) {
            for (let j = 0; j < arrayOfRelations1.length; j++) {
                if (arrayOfRelations1[j] === arrayDiv[i].id) {
                    arrayDiv[i].classList.toggle('changerBackOnGreen')
                }
            }
        }
    });


document.getElementById('ds')
    .addEventListener('click', function (event) {
        div2.classList.toggle('changerBackOnOrange')
        for (let i = 0; i < arrayDiv.length; i++) {
            for (let j = 0; j < arrayOfRelations2.length; j++) {
                if (arrayOfRelations2[j] === arrayDiv[i].id) {
                    arrayDiv[i].classList.toggle('changerBackOnGreen')
                }
            }
        }
    });

document.getElementById('pm')
    .addEventListener('click', function (event) {
        div3.classList.toggle('changerBackOnOrange')
        for (let i = 0; i < arrayDiv.length; i++) {
            for (let j = 0; j < arrayOfRelations3.length; j++) {
                if (arrayOfRelations3[j] === arrayDiv[i].id) {
                    arrayDiv[i].classList.toggle('changerBackOnGreen')
                }
            }
        }
    });

document.getElementById('be')
    .addEventListener('click', function (event) {
        div4.classList.toggle('changerBackOnOrange')
        for (let i = 0; i < arrayDiv.length; i++) {
            for (let j = 0; j < arrayOfRelations4.length; j++) {
                if (arrayOfRelations4[j] === arrayDiv[i].id) {
                    arrayDiv[i].classList.toggle('changerBackOnGreen')
                }
            }
        }
    });

document.getElementById('ba')
    .addEventListener('click', function (event) {
        div5.classList.toggle('changerBackOnOrange')
        for (let i = 0; i < arrayDiv.length; i++) {
            for (let j = 0; j < arrayOfRelations5.length; j++) {
                if (arrayOfRelations5[j] === arrayDiv[i].id) {
                    arrayDiv[i].classList.toggle('changerBackOnGreen')
                }
            }
        }
    });

function changerBackDivByHover() {
    $('#app div').hover(function (){
        $(this).toggleClass('changerBackOnDarkGrey')
    });
}

changerBackDivByHover()



