import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Lunch from "./components/Lunch";
import AboutUs from "./components/AboutUs";
import Hours from "./components/Hours";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <Lunch />
      <AboutUs />
      <Hours />
      <FollowUs />
      <Footer />
    </div>
  );
}
