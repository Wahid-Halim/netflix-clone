import { useEffect, useRef } from "react";

import styles from "./CardsList.module.css";

import CardItem from "./CardItem.jsx";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/dataTMBD.js";
import Spinner from "./Spinner.jsx";

const CardsList = ({ categories = "popular" }) => {
  const { data, isPending } = useQuery({
    queryKey: ["movies", categories],
    queryFn: () => getMovies(categories),
  });

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
      {data?.results?.map((card) => (
        <CardItem
          imgURL={card.backdrop_path}
          moveName={card.title}
          key={card.id}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default CardsList;
