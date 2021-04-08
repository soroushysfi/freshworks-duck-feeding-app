import React from 'react'


import './custom-input.styles.scss'

const CustomInputComponent = ({label, type, placeholder, required}) => {
    return (
        <div className="form-input-material">
        <label >{label}: </label>
          <input type={type} placeholder={placeholder}  className="form-control-material" required={required} />
        </div>
    )
}

export default CustomInputComponent
