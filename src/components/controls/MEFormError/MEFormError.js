import clsx from 'clsx'

import './MEFormError.css';

function MEFormError(props) {
  const {
    hasError = false,
    errorMessage = '',
    className,
  } = props;
  return (
    <span
      className={clsx('MEFormError', className, hasError ? 'MEFormError_show' : '')}
    >
      {errorMessage}
    </span>
  );
}

export default MEFormError;