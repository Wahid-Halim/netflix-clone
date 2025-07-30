import styles from "./Footer.module.css";

import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footerIcon">
        <img src={youtube_icon} alt="youtube icon" />
        <img src={twitter_icon} alt="twitter icon" />
        <img src={instagram_icon} alt="instagram icon" />
        <img src={facebook_icon} alt="facebook icon" />
      </div>
    </footer>
  );
};

export default Footer;
