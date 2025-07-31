import CardsList from "./cardsList";
import styles from "./TitleCards.module.css";

const TitleCards = ({ title, categories }) => {
  
  return (
    <section className={styles.titleCards}>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <CardsList categories={categories} />
    </section>
  );
};

export default TitleCards;
