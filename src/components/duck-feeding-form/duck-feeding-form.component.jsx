import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux'

import { showSchedule } from './../../redux/duck-feeding-info/duck-feeding-info.actions'
import CustomInputComponent from './../custom-input/custom-input.component'

import './duck-feeding-form.styles.scss'


class DuckFeedingFormComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      feedingTime: '',
      foodType: '',
      foodKind: '',
      duckCount: '',
      foodAmount: '',
      reOccurring: false,
      reOccurringPeriod: 'daily',
      loadingButton: false,
      messageAfterSubmit: false
    };
  }
  handleChange = (event) => {
    if (event.target.name !== 'reOccurring') {
      this.setState({[event.target.name]: event.target.value}) 
    } else {
      this.props.showScheduleToggle(event.target.checked)
      this.setState({[event.target.name]: event.target.checked}) 
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({loadingButton: true})
    let data = {...this.state}
    delete data.loadingButton
    delete data.messageAfterSubmit

    await axios.post('https://freshworks-duck-feeding-api.herokuapp.com/api/duck-feeding', data);
    this.setState({loadingButton: false})
    this.setState({messageAfterSubmit: true})

    this.setState({ 
      feedingTime: '',
      foodType: '',
      foodKind: '',
      duckCount: '',
      foodAmount: '',
      reOccurring: false,
      reOccurringPeriod: 'daily'
    })
 
  }
  render () {
    return (  
      <form className="login-form box-format" onSubmit={this.handleSubmit}>
      <h1>Submit your duck feeding information!</h1>
      <div className='display-row'>
      <CustomInputComponent label='Feeding Time' value={this.state.feedingTime} name='feedingTime' onChange={this.handleChange} type='date' placeholder="When did you feed the ducks" required={true}/> 
      <CustomInputComponent label='Food Type' value={this.state.foodType} name='foodType' onChange={this.handleChange} type='text' placeholder="Like vegetable" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Food Kind' value={this.state.foodKind}  name='foodKind' onChange={this.handleChange} type='text' placeholder="Like broccoli" required={true}/> 
      <CustomInputComponent label='Duck Count' value={this.state.duckCount}  name='duckCount' onChange={this.handleChange} type='number' placeholder="How many ducks?" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Food Amount' value={this.state.foodAmount}  name='foodAmount' onChange={this.handleChange} type='number' placeholder="How many grams?" required={true}/> 
      </div>
      <div className='display-row'>
      <CustomInputComponent label='Re-occurring Feeding' value={this.state.reOccurring}  name='reOccurring' onChange={this.handleChange} type='checkbox'/> 
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
