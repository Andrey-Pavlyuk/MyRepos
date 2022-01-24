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

    return (
        <span>
            <span className={styles.likesCounter} onClick={likeFunc}>{currentLike}</span>
        </span>
    );
};

export default LikesCounter



