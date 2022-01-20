import React, {useState} from "react";
import styles from "./LikesCounter.module.scss";

const LikesCounter = () => {
    const [itemState, changeState]  = useState({
        activeObject: null,
        obj: [
            {
                id: 'F',
                likes: 100
            },
        ]
    })

    const addLike = (index) => {
        changeState({...itemState,  activeObject: itemState.obj[index]})
        // console.log(itemState.obj[index])
        itemState.obj.forEach(i => {
            console.log(i)
            i.likes += 1
        })

        // console.log(itemState.obj.likes)
    }

    return (
        <span>
             {itemState.obj.map((elements, index) => (
                <span key={index} className={styles.likesCounter} onClick={() => {addLike(index)}}>{elements.likes}</span>
                 ))}
        </span>
    );
};

export default LikesCounter