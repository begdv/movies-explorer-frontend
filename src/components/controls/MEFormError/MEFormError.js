import clsx from 'clsx'

import './MEFormError.css';

function MEFormError(props) {
  const {
    hasError = false,
    errorMessage = '',
  } = props;
  return (
    <span
      className={clsx('MEFormError', hasError ? 'MEFormError_show' : '')}
    >
      {errorMessage}
    </span>
  );
}

export default MEFormError;