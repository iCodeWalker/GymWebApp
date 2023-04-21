import { createContext } from "react";
import "./App.css";
import AboutSection from "./sections/aboutSection";
import FooterSection from "./sections/footerSection";
import HeaderSection from "./sections/headerSection";
import HomeSection from "./sections/homeSection";
import NavigationSection from "./sections/navigationSection";
import { data } from "./data/data";

export const Data = createContext();

function App() {
  return (
    <Data.Provider value={data}>
      <div className="App">
        <NavigationSection />
        <HeaderSection />
        <HomeSection />
        <AboutSection />
        <FooterSection />
      </div>
    </Data.Provider>
  );
}

export default App;
