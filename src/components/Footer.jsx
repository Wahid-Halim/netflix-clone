import styles from "./Footer.module.css";

import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerIcons}>
        <img src={youtube_icon} alt="youtube icon" />
        <img src={twitter_icon} alt="twitter icon" />
        <img src={instagram_icon} alt="instagram icon" />
        <img src={facebook_icon} alt="facebook icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate information</li>
        <li>Contact us</li>
      </ul>
      <p className={styles.copyrightText}>&copy; 1997-2025 Netflix Inc.</p>
    </footer>
  );
};

export default Footer;
