import { useLocation } from 'react-router-dom';

import clsx from 'clsx'

import './MEFormInput.css';

function MEFormInput(props) {
  const route = useLocation().pathname.replaceAll('/','');
  const {
    type,
    name,
    title,
    minLength,
    maxLength,
    required,
    value,
    disabled,
    hasError = false,
    onChangeValue: handleChangeValue,
  } = props;
  return (
    <div
      className={
        clsx('MEFormInput', (route === 'profile') ?
        'MEFormInput_page_profile' : 'MEFormInput_page_signing')
      }
    >
      <span
        className={
          clsx('MEFormInput__label', (route === 'profile') ?
          'MEFormInput__label_page_profile' : 'MEFormInput__label_page_signing')
        }
      >
        {title}
      </span>
      <input
        className={
          clsx('MEFormInput__input', (route === 'profile') ?
          'MEFormInput__input_page_profile' : 'MEFormInput__input_page_signing',
          hasError ? 'MEFormInput__input_error' : '')
        }
        type={type}
        name={name}
        placeholder={title}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        value={value}
        disabled={disabled}
        onChange={handleChangeValue}
      />
    </div>
  );
}

export default MEFormInput;