import { Link } from 'react-router-dom';

import clsx from 'clsx'

import './MELogo.css';

function MELogo(props) {
  const {className} = props;
  
  return (
    <Link className={clsx('MELogo', className)} to="/" title="О проекте"></Link>
  );
}

export default MELogo;
