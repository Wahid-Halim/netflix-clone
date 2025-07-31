import styles from "./Hero.module.css";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import hero_banner from "../assets/hero_banner.jpg";
import TitleCards from "./TitleCards";

const Hero = () => {
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
        <div className={styles.heroBtns}>
          <button className={`${styles.btn} ${styles.playBtn}`}>
            <img src={play_icon} alt="play icon" />
            Play
          </button>
          <button className={`${styles.btn} ${styles.darkBtn}`}>
            <img src={info_icon} alt="info icon" />
            More info
          </button>
        </div>
        <TitleCards categories="now_playing" />
      </div>
    </div>
  );
};

export default Hero;
