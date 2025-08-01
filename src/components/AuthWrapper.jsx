// components/AuthWrapper.jsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCheckingAuth(false);

      const isLoginPage = location.pathname === "/login";

      if (user && isLoginPage) {
        navigate("/home", { replace: true });
      } else if (!user && !isLoginPage) {
        navigate("/login", { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);

  if (checkingAuth) return <div style={{ color: "white" }}>Loading...</div>; // simple loading UI

  return children;
};

export default AuthWrapper;
