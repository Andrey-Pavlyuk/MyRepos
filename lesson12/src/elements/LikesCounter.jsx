import React, {useState} from "react";
import styles from "./LikesCounter.module.scss";

const LikesCounter = ({likes}) => {
    const [isLiked, setIsLiked]  = useState(false)
    const [currentLike, setLike] = useState(likes)

    const likeFunc = () => {
        isLiked ? setIsLiked(false) : setIsLiked(true);

        !isLiked
            ? setLike(prev => prev + 1)
            : setLike(prev => prev - 1)

        likes = currentLike
    }
    console.log(currentLike)

    return (
        <span>
            <span className={styles.likesCounter} onClick={likeFunc}>{currentLike}</span>
        </span>
    );
};

export default LikesCounter


//
// const addLike = (index) => {
//     changeState({...itemState,  activeObject: itemState.obj[index]})
//     // console.log(itemState.obj[index])
//     itemState.obj.forEach(i => {
//         i.likes += 1
//     })
//
//     // console.log(itemState.obj.likes)
// }
