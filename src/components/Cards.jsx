import React from "react";
import styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.name}>{props.data.name}</h3>
        <p className={styles.price}>{props.data.price} تومان</p>
      </div>
    </>
  );
};

export default Cards;
