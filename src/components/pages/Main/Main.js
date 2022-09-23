import './Main.css';

import Promo from "./Promo/Promo";

function Main(props) {
  const {
    onMenuPopup: handleMenuPopup,
  } = props;
  return (
    <div className="Main App__main">
      <Promo onMenuPopup={handleMenuPopup}/>
    </div>
  );
}

export default Main;