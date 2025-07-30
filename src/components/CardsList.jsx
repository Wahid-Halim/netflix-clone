import { useEffect, useRef } from "react";

import cards_data from "../assets/cards/Cards_data.js";
import styles from "./CardsList.module.css";

import CardItem from "./CardItem.jsx";

const CardsList = () => {
  const cardsRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(function () {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className={styles.CardsList} ref={cardsRef}>
      {cards_data.map((card, index) => (
        <CardItem imgURL={card.image} moveName={card.name} key={index} />
      ))}
    </div>
  );
};

export default CardsList;
