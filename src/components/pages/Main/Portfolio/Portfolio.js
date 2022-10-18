import './Portfolio.css';

function Portfolio() {
  return (
    <div className="Portfolio">
      <h4 className="Portfolio_title">Портфолио</h4>
      <ul className="Portfolio_list">
      <li className="Portfolio_item">
        <a
          className="Portfolio_item-title"
          href="https://github.com/begdv/react-mesto-auth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Статичный сайт
        </a>
        <a
          className="Portfolio_item-ref"
          href="https://github.com/begdv/how-to-learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#x2197;
        </a>
      </li>
      <li className="Portfolio_item">
        <a
            className="Portfolio_item-title"
            href="https://github.com/begdv/react-mesto-auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
        </a>
        <a
          className="Portfolio_item-ref"
          href="https://github.com/begdv/russian-travel"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#x2197;
        </a>
        </li>
        <li className="Portfolio_item">
          <a
            className="Portfolio_item-title"
            href="https://github.com/begdv/react-mesto-auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="Portfolio_item-ref"
            href="https://github.com/begdv/react-mesto-auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#x2197;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
