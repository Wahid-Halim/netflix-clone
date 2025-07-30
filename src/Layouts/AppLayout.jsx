import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";

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
