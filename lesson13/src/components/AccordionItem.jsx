import React, {useState} from "react";
import styles from "./Accordion.module.scss"

export const AccordionItem = () => {
    const [itemState, setState] = useState({
        activeObject: null,
        objects: [
            {
                id: 1,
                question: "1. What is your name?",
                answer: "My name is Andrew"
            },
            {
                id: 2,
                question: "2. What is your favorite color?",
                answer: "My favorite color is red"
            },
            {
                id: 3,
                question: "3. Wound you like cat or dog?",
                answer: "I prefer cat"
            }
        ]
    })

    const openAnswer = (index) => {
        if(itemState.objects[index] === itemState.activeObject) {
            setState({...itemState, activeObject: null})
        }
        else {
            setState({...itemState, activeObject: itemState.objects[index]})
        }
    }

    const addStyle = (index) => {
        if(itemState.objects[index] === itemState.activeObject) {
            return styles.accordionItem + " " + styles.selected
        } else {
            return styles.accordionItem
        }
    }

    return (
        <div>
            {itemState.objects.map((elements, index) => (
                <div key={index} className={addStyle(index)} onClick={() => {openAnswer(index)}}>
                    <div className={styles.accordionQuestion}>
                        <span>{elements.question}</span>
                    </div>
                    <p className={styles.accordionAnswer}>
                        {elements.answer}
                    </p>
                </div>
            ))}
        </div>
    );
}

// prev - принимает предыдущие состояние
// console.log(accordionItem)
// update((prev) => {
//     // console.log(prev)
//     return prev.filter((item) => {
//          // return item.id !== id
//         // console.log(item)
//         accordionItem = styles.accordionItem + " " + styles.selected
//         console.log(accordionItem)
//         return accordionItem
//         // if(item.id !== id){
//         //     // accordionItem.classList.add('selected')
//         //     console.log(accordionItem)
//         //     return accordionItem
//         // }
//     })
// })
