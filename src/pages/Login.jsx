import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "./Login.module.css";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isForShowSignUp, setIsForShowSignUp] = useState(true);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  console.log(userInfo.email);

  const signIn = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
  };

  return (
    <section className={styles.login}>
      <img src={logo} alt="netflix logo" className={styles.loginLogo} />
      <div className={styles.loginForm}>
        <h1>{isForShowSignUp ? "Sign Up" : "Sign In"}</h1>
        <form>
          {isForShowSignUp && (
            <input
              type="text"
              placeholder="your name"
              onChange={(e) =>
                setUserInfo((info) => ({
                  ...info,
                  firstName: e.target.value,
                }))
              }
            />
          )}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setUserInfo((info) => ({
                ...info,
                email: e.target.value,
              }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserInfo((info) => ({
                ...info,
                password: e.target.value,
              }))
            }
          />
          <button onClick={signIn}>
            {isForShowSignUp ? "Sign Up" : "Sign In"}
          </button>
          <div className={styles.formHelp}>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className={styles.formSwitch}>
          <p>
            {!isForShowSignUp ? (
              <>
                New to Netflix?{" "}
                <span onClick={() => setIsForShowSignUp((state) => !state)}>
                  Sign Up Now
                </span>
              </>
            ) : (
              <>
                Already Have account{" "}
                <span onClick={() => setIsForShowSignUp((state) => !state)}>
                  Sign In Now
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
