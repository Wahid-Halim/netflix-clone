import { logout } from "../services/auth";
import styles from "./SignOutDropdown.module.css";

const SignOutOfNetflix = () => {
  return (
    <div className={styles.dropdown}>
      <p onClick={() => logout()}>Sign Out of Netflix</p>
    </div>
  );
};

export default SignOutOfNetflix;
