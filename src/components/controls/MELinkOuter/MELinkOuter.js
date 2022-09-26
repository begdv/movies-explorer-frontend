import clsx from 'clsx'

import './MELinkOuter.css';

function MELinkOuter(props) {
  const {className, link, title} = props;
  return (
    <a
      className={clsx('MELinkOuter', className)}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}

export default MELinkOuter;