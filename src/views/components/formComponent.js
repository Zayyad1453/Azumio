import React from 'react';
import OptionComponent from './optionComponent';

const FormComponent = (props) => {
  return (
    <div className='form-container p-sm'>
      <div className='header bolder mx-auto font-md'>
        {props.header}
      </div>
      <div className='sub-header bold font-sm my-sm'>
        {props.subheader}
      </div>
      <div className='options-container clearfix'>
        {props.options && props.options.map(option => 
          <OptionComponent 
          selection={props.selection}
          selectOption={props.selectOption}
          {...option}
          />
        )}
      </div>
    </div>
  )
}

export default FormComponent;
