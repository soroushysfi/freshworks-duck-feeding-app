import React from 'react'

import CustomInputComponent from './../custom-input/custom-input.component'

import './duck-feeding-form.styles.scss'
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

const DuckFeedingFormComponent = () => {
    return (  
      <form className="login-form" onSubmit={handleSubmit}>
      <h1>Submit your duck feeding information!</h1>
      <div className='display-row'>
      <CustomInputComponent label='Feeding Time' type='date' placeholder="When did you feed the ducks" required={true}/> 
      <CustomInputComponent label='Food Type' type='text' placeholder="Like vegetable" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Food Kind' type='text' placeholder="Like broccoli" required={true}/> 
      <CustomInputComponent label='Duck Count' type='number' placeholder="How many ducks?" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Food Amount' type='number' placeholder="How many grams?" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Re-occurring Feeding' type='checkbox' placeholder="" required={true}/> 
      <div className="form-input-material">
      <label htmlFor="period">Re-occurring Period:</label>
        <select id="period" name="period">
            <option value="volvo">Daily</option>
            <option value="saab">Weekly</option>
            <option value="fiat">Monthly</option>
        </select>
      </div>
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
    )
}

export default DuckFeedingFormComponent
