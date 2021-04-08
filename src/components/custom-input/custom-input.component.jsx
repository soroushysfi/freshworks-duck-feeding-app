import React from 'react'


import './custom-input.styles.scss'

const CustomInputComponent = ({label, type, placeholder, required, onChange, name, value}) => {
    return (
        <div className="form-input-material">
        <label >{label}: </label>
          <input value={value} type={type} placeholder={placeholder} onChange={onChange} name={name} className="form-control-material" required={required} />
        </div>
    )
}

export default CustomInputComponent
