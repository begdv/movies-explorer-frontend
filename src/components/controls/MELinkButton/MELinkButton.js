import { Link } from 'react-router-dom';
import clsx from 'clsx'

import './MELinkButton.css';

function MELinkButton(props) {
  const {className, to, title} = props;
  return (
    <Link className={clsx('MELinkButton', className)} to={to}>{title}</Link>
  );
}

export default MELinkButton;