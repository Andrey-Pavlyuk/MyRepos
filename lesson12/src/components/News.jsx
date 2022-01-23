import React from "react";
import styles from './News.module.scss';
import Article from "./Article";

const News = ({item}) => {
    return (
        <section className={styles.news}>
            <Article likes={item.likes}/>
        </section>
    );
};

export default News