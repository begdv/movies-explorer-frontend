import { useLocation } from 'react-router-dom';

import clsx from 'clsx'

import MEFormError from "../MEFormError/MEFormError";

import './MEFormInput.css';

function MEFormInput(props) {
  const route = useLocation().pathname.replaceAll('/','');
  const {
    type,
    name,
    title,
    hint,
    minLength,
    maxLength,
    required,
    value,
    disabled,
    pattern,
    errorMessage = "",
    onChangeValue: handleChangeValue,
  } = props;

  return (
    <div
      className={
        clsx('MEFormInput', (route === 'profile') ?
        'MEFormInput_page_profile' : 'MEFormInput_page_signing')
      }
    >
      <div className={
        clsx('MEFormInput__control', (route === 'profile') ?
          'MEFormInput__control_page_profile' : 'MEFormInput__control_page_signing')
        }
      >
        <span
          className={
            clsx('MEFormInput__label', (route === 'profile') ?
          ' MEFormInput__label_page_profile' : 'MEFormInput__label_page_signing')
          }
        >
          {title}
        </span>
        <input
          className={
            clsx('MEFormInput__input', (route === 'profile') ?
              'MEFormInput__input_page_profile' : 'MEFormInput__input_page_signing',
              errorMessage ? 'MEFormInput__input_error' : '')
          }
          type={type}
          name={name}
          placeholder={title}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          value={value}
          disabled={disabled}
          pattern={pattern}
          title={hint}
          onChange={handleChangeValue}
        />
      </div>
      <MEFormError
        errorMessage={errorMessage}
        className="MEFormError_type_input"
      />
    </div>
  );
}

export default MEFormInput;
