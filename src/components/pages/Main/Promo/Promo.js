import { useRef } from "react";

import MEButton from '../../../controls/MEButton/MEButton';

import landingLogo from '../../../../images/landing-logo.png';

import './Promo.css';

function Promo() {
  const promoHref = useRef(null);
  const handleClickMoreBtn = () => {
    const about = promoHref.current.nextSibling;
    about.scrollIntoView(false);
  }
  return (
    <section className="Promo" ref={promoHref}>
      <img
        className="Promo__landing-logo"
        src={landingLogo}
        alt="Учебный проект студента факультета Веб-разработки."
      />
      <div className="Promo__content">
        <h1 className="Promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p  className="Promo__description">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <MEButton
          className="MEButton_type_promo"
          type="button"
          title="Узнать больше"
          onClick={handleClickMoreBtn}
        />
      </div>
    </section>
  );
}

export default Promo;