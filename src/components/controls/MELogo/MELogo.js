import './MELogo.css';
import { Link } from 'react-router-dom';

function MELogo() {
  return (
    <Link className="MELogo" to="/" title="О проекте"></Link>
  );
}

export default MELogo;