import styles from "../components/Navbar.module.css";
import { useState } from "react";

import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import SignOutDropdown from "./SignOutDropdown";

const Navbar = () => {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <img src={logo} alt="Logo" />

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">TV show</a>
            </li>
            <li>
              <a href="/">New & Popular</a>
            </li>
            <li>
              <a href="/">My List</a>
            </li>
            <li>
              <a href="/">Browse by language</a>
            </li>
          </ul>
        </div>
        <div className={styles.navRight}>
          <img src={search_icon} alt="search icon" />
          <p>Children</p>
          <img src={bell_icon} alt="bell icon" />
          <div className={styles.navbarProfile}>
            <img
              src={profile_img}
              alt="profile img"
              className={styles.profile}
            />
            <img
              src={caret_icon}
              alt="caret icon"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseOut={() => setIsDropdownOpen(false)}
            />
            {isDropDownOpen && <SignOutDropdown />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
