import './Main.css';

import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../../common/Footer/Footer";

function Main(props) {
  return (
    <div className="Main App__main">
      <main>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;