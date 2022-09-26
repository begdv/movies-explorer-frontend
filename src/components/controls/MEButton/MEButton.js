import clsx from 'clsx'

import './MEButton.css';

function MEButton(props) {
  const {
    type,
    title,
    className,
    onClick: handleButtonClick,
  } = props;
  return (
    <button
      className={clsx('MEButton', className)}
      type={type}
      onClick={handleButtonClick}
    >
      {title}
    </button>
  );
}

export default MEButton;