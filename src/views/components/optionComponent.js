import React from 'react';

const OptionComponent = (props) => {
  const isChecked = props.selection.includes(props.value);
  return (
    <button
      className={`option text-center ${isChecked ? 'option-checked' : 'option-unchecked'}`}
      value={props.value}
      onClick={() => props.selectOption(props.value, isChecked)}
    >
      <p>
        {props.text}
      </p>
    </button>
  )
}

export default OptionComponent;
