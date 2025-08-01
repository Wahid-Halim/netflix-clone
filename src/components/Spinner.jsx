import netflix_spinner from "../assets/netflix_spinner.gif";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <img src={netflix_spinner} alt="netflix spinner gif" />
    </div>
  );
};

export default Spinner;
