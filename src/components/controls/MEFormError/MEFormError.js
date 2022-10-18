import clsx from 'clsx'

import './MEFormError.css';

function MEFormError(props) {
  const {
    errorMessage = '',
    className,
  } = props;

  return (
    <span
      className={clsx('MEFormError', className, errorMessage ? 'MEFormError_show' : '')}
    >
      {errorMessage}
    </span>
  );
}

export default MEFormError;
