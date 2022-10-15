import { useNavigate } from 'react-router-dom';

import MEButton from '../../controls/MEButton/MEButton';

import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  const handleClickBack = (e) => {
    e.preventDefault();

    navigate(-1);
  }
  return (
    <main className="NotFound">
      <section className="NotFound__content">
        <div className="NotFound__info">
          <h1 className="NotFound__title">404</h1>
          <span className="NotFound__description">Страница не найдена</span>
        </div>
        <div className='NotFound__link'>
          <MEButton className="MEButton_type_not-found" onClick={handleClickBack} title="Назад"/>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
