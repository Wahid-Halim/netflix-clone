import { useNavigate } from "react-router-dom";
import styles from "./cardItem.module.css";
const CardItem = ({ imgURL, moveName, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/player/${id}`);
  };

  return (
    <div className={styles.cardItem} onClick={handleClick}>
      <img src={`https://image.tmdb.org/t/p/w500${imgURL}`} alt={moveName} />
      <p>{moveName}</p>
    </div>
  );
};

export default CardItem;
