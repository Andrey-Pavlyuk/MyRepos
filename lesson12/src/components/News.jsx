import React from "react";
import styles from './News.module.scss';
import Article from "./Article";

const News = () => {
    return (
        <section className={styles.news}>
            <Article/>
        </section>
    );
};

export default News