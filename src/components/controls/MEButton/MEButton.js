import clsx from 'clsx';

import './MEButton.css';

function MEButton(props) {
  const {
    type,
    title,
    className,
    disabled,
    onClick: handleButtonClick,
  } = props;
  return (
    <button
      className={clsx('MEButton', className)}
      type={type}
      disabled={disabled}
      onClick={handleButtonClick}
    >
      {title}
    </button>
  );
}

export default MEButton;