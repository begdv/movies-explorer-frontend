import React from 'react';

import './MEFilterSwitch.css';

function MEFilterSwitch(props) {
  const [checked, setChecked] = React.useState(true);
  function handleChange() {
		setChecked(!checked);
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