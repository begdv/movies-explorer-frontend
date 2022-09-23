import Header from "../../../common/Header/Header";

import './Promo.css';

function Promo(props) {
  const {
    onMenuPopup: handleMenuPopup,
  } = props;
  return (
    <div className="Promo">
      <Header
        isLoggedIn={true}
        onMenuPopup={handleMenuPopup}
      />
    </div>
  );
}

export default Promo;