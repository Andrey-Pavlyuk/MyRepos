import React from "react";
import styles from "./Tag.module.scss";

const Tag = ({obj}) => {
    return (
        <span className={styles.tag}>{obj}</span>
    );
};

export default Tag