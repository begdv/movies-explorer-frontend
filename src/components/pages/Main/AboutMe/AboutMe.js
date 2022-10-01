import MELinkOuter from '../../../controls/MELinkOuter/MELinkOuter';
import Portfolio from '../Portfolio/Portfolio';

import AboutMePhoto from '../../../../images/photo_me.jpg';

import './AboutMe.css';

function AboutMe() {
  return (
    <section className="AboutMe">
      <h2 className="AboutMe__title">Студент</h2>
      <div className="AboutMe__content">
        <img
          className="AboutMe-photo"
          src={AboutMePhoto}
          alt="Учебный проект студента факультета Веб-разработки."
        />
        <div className="AboutMe__review">
          <h3 className="AboutMe__name">
            Бегунов Дмитрий
          </h3>
          <p className="AboutMe__description">
            Веб-разработчик, 49 лет
          </p>
          <p className="AboutMe__biography">
            Я родился и живу в Нижнем Новгороде, закончил факультет радиоэлектроники и технической кибернетики НГТУ, по специальности радиоиженер. После окончания университета изучал разные языки программирования (С++, Дельфи), но затем сосредоточился на веб-разработке. С 2007 года работаю в компании Ростелеком.
          </p>
          <MELinkOuter
            className="MELinkOuter_type_landing"
            link="https://github.com/begdv"
            title="Github"
          />
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;