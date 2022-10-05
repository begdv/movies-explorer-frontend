import MELink from '../../controls/MELink/MELink';

import './NotFound.css';

function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound__content">
        <div className="NotFound__info">
          <h1 className="NotFound__title">404</h1>
          <span className="NotFound__description">Страница не найдена</span>  
        </div>        
        <div className='NotFound__link'>
          <MELink className="MELink_type_signing" to="/" title="Назад"/>
        </div>
      </div>
    </div>
  );
}

export default NotFound;