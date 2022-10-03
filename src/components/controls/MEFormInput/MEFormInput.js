import './MEFormInput.css';

function MEFormInput(props) {
  const {
    type,
    name,
    title,
    minLength,
    maxLength,
    required,
    value,
    disabled,
    onChangeValue: handleChangeValue,
  } = props;
  return (
    <div className="MEFormInput">
      <span className="MEFormInput__label">{title}</span>
      <input 
        type={type} 
        className="MEFormInput__input" 
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