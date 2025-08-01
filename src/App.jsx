import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Player from "./pages/Player";
import AuthWrapper from "./components/AuthWrapper";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <AuthWrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/player/:id" element={<Player />} />
          </Route>
        </Routes>
      </AuthWrapper>
    </BrowserRouter>
  );
};

export default App;
