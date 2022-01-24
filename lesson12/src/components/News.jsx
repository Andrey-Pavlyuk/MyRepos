import React from "react";
import styles from './News.module.scss';
import Article from "./Article";

const News = ({item}) => {
    return (
        <section className={styles.news}>
            <Article title={item.title} description={item.description} data={item.published} likes={item.likes} comments={item.comments} image={item.image} tags={item.tags}/>
        </section>
    );
};

export default News