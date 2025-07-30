import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import TitleCards from "../components/TitleCards";

const AppLayout = () => {
  return (
    <section>
      <Navbar />
      <main>
        <Home />
      </main>

      <Footer />
    </section>
  );
};
export default AppLayout;
