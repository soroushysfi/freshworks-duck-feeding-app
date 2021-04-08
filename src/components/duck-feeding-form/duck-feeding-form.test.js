import { shallow, mount } from 'enzyme'
import DuckFeedingForm from './duck-feeding-form'



it('expect to match DuckFeedingForm snapshot', () => {
    expect(shallow(<DuckFeedingForm />)).toMatchSnapshot()

})

it('expect initial state to be empty', () => {
    const wrapper = mount(<DuckFeedingForm />)

    expect(wrapper.instance().state.formData.feedingTime).toBe('')
})

it('expect handleChange function to modify state', () => {
    const wrapper = mount(<DuckFeedingForm />)
    wrapper.instance().handleChange({target: {name: 'feedingTime', value: 'time'}})
    expect(wrapper.instance().state.formData.feedingTime).toBe('time')

})

