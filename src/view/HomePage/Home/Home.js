import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";
import TopRightSection from "../TopRightSection/TopRightSection";
import TopSection from "../TopSection/TopSection";
import Testimonial from "../Testimonial/Testimonial";
import Cuisine from "../Cuisine/Cuisine";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import Contact from "../Contact/Contact";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Search />
      <TopRightSection />
      <TopSection />
      <Cuisine />
      <Testimonial />
      <SpecialOffer />
      <Contact />
    </div>
  );
}

export default Home;
