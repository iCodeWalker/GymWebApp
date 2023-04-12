import "./App.css";
import AboutSection from "./sections/aboutSection";
import FooterSection from "./sections/footerSection";
import HeaderSection from "./sections/headerSection";
import HomeSection from "./sections/homeSection";
import NavigationSection from "./sections/navigationSection";

function App() {
  return (
    <div className="App">
      <NavigationSection />
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}

export default App;
