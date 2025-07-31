import styles from "./MoviesSection.module.css";
import TitleCards from "./TitleCards";

const MoviesSection = () => {
  return (
    <div className={styles.moviesRows}>
      <TitleCards title={"Blockbuster Movies"} categories="top_rated" />
      <TitleCards title={"Only on Netflix"} categories="popular" />
      <TitleCards title={"Upcoming"} categories="upcoming" />
      <TitleCards title={"Top Pics for you"} categories="now_playing" />
    </div>
  );
};

export default MoviesSection;
