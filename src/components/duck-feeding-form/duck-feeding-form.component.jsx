import React from 'react'

import './duck-feeding-form.styles.scss'
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form was submitted');
  }

const DuckFeedingFormComponent = () => {
    return (  
      <form className="login-form" onSubmit={handleSubmit}>
      <h1>Submit your duck feeding information!</h1>
      <div className='display-row'>
      <div className="form-input-material">
      <label >Feeding Time: </label>
        <input type="text" name="username" placeholder=" "  className="form-control-material" required />
      </div>
      <div className="form-input-material">
      <label >Food Type:</label>
        <input type="text" name="text"  placeholder=" "  className="form-control-material" required />
      </div>
      </div>
      <div className='display-row'>
      <div className="form-input-material">
      <label >Food Kind:</label>
        <input type="text" name="text"  placeholder=" "  className="form-control-material" required />
      </div>
      <div className="form-input-material">
      <label >Duck Count:</label>
        <input type="number" name="text"  placeholder=" "  className="form-control-material" required />
      </div>
      </div>
      <div className='display-row'>
      <div className="form-input-material">
      <label >Food Amount:</label>
        <input type="number" name="text"  placeholder=" "  className="form-control-material" required />
      </div>
      </div>
      <div className='display-row'>
      <div className="form-input-material">
      <label >Re-occurring Feeding:</label>
        <input type="checkbox" name="text"  placeholder=" "  className="form-control-material" required />
      </div>
      <div className="form-input-material">
      <label >Re-occurring Period:</label>
        <input type="text" name="text"  placeholder=" "  className="form-control-material" required />
      </div>
      </div>
      <button type="submit" className="btn btn-primary btn-ghost">Submit</button>
    </form>
    )
}

export default DuckFeedingFormComponent
