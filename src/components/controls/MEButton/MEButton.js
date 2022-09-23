import clsx from 'clsx'

import './MEButton.css';

function MEButton(props) {
  const {className, type, title} = props;
  return (
    <button className={clsx('MELink', className)} type={type}>{title}</button>
  );
}

export default MEButton;