import MELinkOuter from '../../controls/MELinkOuter/MELinkOuter';

import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <h2 className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="Footer__content">
        <ul className="Footer__links">
          <li className="Footer__link">
            <MELinkOuter
              className="MELinkOuter_type_footer"
              link="https://practicum.yandex.ru/profile/web/"
              title="Яндекс.Практикум"
            />
          </li>
          <li className="Footer__link">
            <MELinkOuter
            className="MELinkOuter_type_footer"
            link="https://github.com/begdv"
            title="Github"
          />
          </li>
        </ul>
        <span className="Footer__copyright">© 2022</span>
      </div>
    </div>
  );
}

export default Footer;
