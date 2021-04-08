import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux'

import { showSchedule } from './../../redux/duck-feeding-info/duck-feeding-info.actions'
import CustomInputComponent from './../custom-input/custom-input.component'
import API_CRED from './../../config/api-config'
import './duck-feeding-form.styles.scss'


class DuckFeedingFormComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      formData : {
      feedingTime: '',
      foodType: '',
      foodKind: '',
      duckCount: '',
      foodAmount: '',
      reOccurring: false,
      reOccurringPeriod: 'daily',
      },
      loadingButton: false,
      messageAfterSubmit: false
    
    };
  }
  handleChange = (event) => {
    const { formData } = { ...this.state }
    if (event.target.name !== 'reOccurring') {
      formData[event.target.name] = event.target.value
    } else {
      this.props.showScheduleToggle(event.target.checked)
      formData[event.target.name] = event.target.checked
    }
    this.setState({formData}) 

  };
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({loadingButton: true})
    await axios.post(API_CRED.address, this.state.formData);
    this.setState({loadingButton: false})
    this.setState({messageAfterSubmit: true})

    const formData = { 
      feedingTime: '',
      foodType: '',
      foodKind: '',
      duckCount: '',
      foodAmount: '',
      reOccurring: false,
      reOccurringPeriod: 'daily'
    }
    this.setState({formData})
 
  }
  render () {
    return (  
      <form className="login-form box-format" onSubmit={this.handleSubmit}>
      <h1>Submit your duck feeding information!</h1>
      <div className='display-row'>
      <CustomInputComponent label='Feeding Time' value={this.state.formData.feedingTime} name='feedingTime' onChange={this.handleChange} type='date' placeholder="When did you feed the ducks" required={true}/> 
      <CustomInputComponent label='Food Type' value={this.state.formData.foodType} name='foodType' onChange={this.handleChange} type='text' placeholder="Like vegetable" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Food Kind' value={this.state.formData.foodKind}  name='foodKind' onChange={this.handleChange} type='text' placeholder="Like broccoli" required={true}/> 
      <CustomInputComponent label='Duck Count' value={this.state.formData.duckCount}  name='duckCount' onChange={this.handleChange} type='number' placeholder="How many ducks?" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Food Amount' value={this.state.formData.foodAmount}  name='foodAmount' onChange={this.handleChange} type='number' placeholder="How many grams?" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Re-occurring Feeding' value={this.state.formData.reOccurring}  name='reOccurring' onChange={this.handleChange} type='checkbox'/> 
      {
      this.props.showSchedule &&
      <div className="form-input-material">
      <label htmlFor="period">Re-occurring Period:</label>
        <select id="period" name='reOccurringPeriod'   onChange={this.handleChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
        </select>
      </div>
      }
      </div>
      {
        this.state.messageAfterSubmit &&
        <p className='success-message'>Data successfully submitted!</p>
      }
      <button disabled={this.state.loadingButton} type="submit" className="btn">Submit
      {
        this.state.loadingButton &&
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        }
      </button>
    </form>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  showScheduleToggle: (data) => dispatch(showSchedule(data))
})
const mapStateToProps = (state) => ({ 
  showSchedule: state.duckFeeding.showSchedule
});
export default connect(mapStateToProps, mapDispatchToProps)(DuckFeedingFormComponent)
