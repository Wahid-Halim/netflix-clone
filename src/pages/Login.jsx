import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "./Login.module.css";
import netflix_spinner from "../assets/netflix_spinner.gif";

import { login, signUp } from "../services/auth";
import Spinner from "../components/Spinner";

const Login = () => {
  const [isForShowSignUp, setIsForShowSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (isForShowSignUp) {
      setIsLoading(false);
    } else {
      await login(userInfo);
    }
    await signUp(userInfo);
  };

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.login}>
      <img src={logo} alt="netflix logo" className={styles.loginLogo} />
      <div className={styles.loginForm}>
        <h1>{isForShowSignUp ? "Sign Up" : "Sign In"}</h1>
        <form onSubmit={handleSubmit}>
          {isForShowSignUp && (
            <input
              value={userInfo.firstName}
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
            value={userInfo.email}
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
            value={userInfo.password}
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserInfo((info) => ({
                ...info,
                password: e.target.value,
              }))
            }
          />
          <button>{isForShowSignUp ? "Sign Up" : "Sign In"}</button>
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
