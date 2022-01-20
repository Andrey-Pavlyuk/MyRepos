import React from "react";
import styles from "./Accordion.module.scss"
import {AccordionItem} from "./AccordionItem"
// import AccordionJson from "../todo.json"

const Accordion = ({title}) => {
    return (
        <section className={styles.accordion}>
            <h1>{title}</h1>
            <AccordionItem/>
        </section>
    );
};

export default Accordion


// const [accordion , setAccordion] = useState(AccordionJson);
{/*{accordion.map((item) => {*/}
{/*    return <AccordionItem key={item.id} {...item} update={setAccordion}/>*/}
{/*})}*/}