import styles from "./Home.module.css";
import Hero from "../components/Hero";
import TitleCards from "../components/TitleCards";
import CardsList from "../components/cardsList";
import Navbar from "../components/Navbar";
import MoveSection from "../components/MoveSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <MoveSection />
      </main>
    </>
  );
};

export default Home;
