import styles from "./Home.module.css";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";

const Home = () => {
  return (
    <div className={styles.hero}>
      <img src={hero_banner} alt="hero img" className={styles.bannerImg} />
      <div className={styles.heroCaption}>
        <img src={hero_title} alt="hero title" className={styles.captionImg} />
        <p>
          Discover his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immoral
          enemy.
        </p>
      </div>
    </div>
  );
};

export default Home;
