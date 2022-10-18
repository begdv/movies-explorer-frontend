import { NavLink } from 'react-router-dom';
import clsx from 'clsx'

import './MENavLink.css';

function MENavLink(props) {
  const {
    to,
    title,
    className,
    onClick: handleNavLinkClick,
  } = props;

  return (
    <NavLink
      end
      className={clsx('MENavLink', className)}
      to={to}
      onClick={handleNavLinkClick}
    >
      {title}
    </NavLink>
  );
}

export default MENavLink;
