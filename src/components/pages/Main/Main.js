import './Main.css';

import Header from "../../common/Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../../common/Footer/Footer";

function Main(props) {
  const {
    onMenuPopup: handleMenuPopup,
  } = props;
  return (
    <div className="Main App__main">
      <Header
        isLoggedIn={false}
        onMenuPopup={handleMenuPopup}
      />
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