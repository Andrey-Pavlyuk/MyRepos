import React from "react";
import CommentsCounter from "../elements/CommentsCounterM";
import Tag from "../elements/Tag";
import LikesCounter from "../elements/LikesCounter";
import styles from "./Article.module.scss"


const  Article = () => {
    return (
        <section className={styles.article}>
            <header>
                <div className={styles.poster}>
                    <img src="https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png" alt=""/>
                </div>
                <div className={styles.tags}>
                    <div>
                        <Tag obj={'Literature'}/>
                    </div>
                    <div>
                        <Tag obj={'Books'}/>
                    </div>
                </div>
            </header>
            <article>
                <h1>American writer of bad cowboy stories arrived in</h1>
                <p>Volunteering to help people in need combined with travelling to faraway places is a new </p>
            </article>
            <footer>
                <span>15.07.2017</span>
                <div className={styles.controls}>
                    <CommentsCounter/>
                    <LikesCounter/>
                </div>
            </footer>
        </section>
    );
};

export default Article