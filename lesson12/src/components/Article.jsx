import React from "react";
import CommentsCounter from "../elements/CommentsCounterM";
import Tag from "../elements/Tag";
import LikesCounter from "../elements/LikesCounter";
import styles from "./Article.module.scss"

const  Article = ({title, description, data, likes, comments, image, tags}) => {

    const getData = (data) => {
        let date1 = new Date(data)
        return date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate()
    }

    return (
        <section className={styles.article}>
            <header>
                <div className={styles.poster}>
                    <img src={image} alt=""/>
                </div>
                <div className={styles.tags}>
                    <div>
                        <Tag obj={tags[0]}/>
                    </div>
                    <div>
                        <Tag obj={tags[1]}/>
                    </div>
                </div>
            </header>
            <article>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>
            <footer>
                <span>{getData(data)}</span>
                <div className={styles.controls}>
                    <CommentsCounter comments={comments}/>
                    <LikesCounter likes={likes}/>
                </div>
            </footer>
        </section>
    );
};

export default Article