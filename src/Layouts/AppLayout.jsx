import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import TitleCards from "../components/TitleCards";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return <Outlet />;
};
export default AppLayout;
