import AppLayout from "./Layouts/AppLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Player from "./pages/Player";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player/:id" element={<Player />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
