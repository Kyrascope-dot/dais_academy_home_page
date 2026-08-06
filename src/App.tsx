import CTASection from "./components/CTASection";
import EventCards from "./components/EventAndResearch";
import FacultyAndWebinars from "./components/FacultyAndWebinars";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";

const App = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>

      <div className="relative">
        <HeroSection />

        <div className="w-full absolute left-1/2 -translate-x-1/2 -bottom-50 md:-bottom-60 z-50">
          <StatsSection />
        </div>
      </div>

      <FeatureCards />

      <EventCards />

      <FacultyAndWebinars />

      <CTASection />

      <Footer />
    </div>
  );
};

export default App;
