import { Link } from 'react-router-dom';
import clsx from 'clsx'

import './MELink.css';

function MELink(props) {
  const {className, to, title} = props;
  
  return (
    <Link className={clsx('MELink', className)} to={to}>{title}</Link>
  );
}

export default MELink;
