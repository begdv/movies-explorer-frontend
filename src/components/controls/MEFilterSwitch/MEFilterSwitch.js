import React from 'react';

import './MEFilterSwitch.css';

function MEFilterSwitch(props) {
  const {
    switchValue,
    onSwitchChange: handleSwitchChange,
  } = props;
  const [checked, setChecked] = React.useState(switchValue);
  const handleChange = (e) => {
		setChecked(e.target.checked);
    handleSwitchChange(e.target.checked)
	}
  return (
    <label className="MEFilterSwitch">
      <input
        className="MEFilterSwitch__input"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className="MEFilterSwitch__slider"></span>
    </label>
  );
}

export default MEFilterSwitch;