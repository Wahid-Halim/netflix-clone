import styles from "./cardItem.module.css";
const CardItem = ({ imgURL, moveName }) => {
  return (
    <div className={styles.cardItem}>
      <img src={imgURL} alt={moveName} />
      <p>{moveName}</p>
    </div>
  );
};

export default CardItem;
