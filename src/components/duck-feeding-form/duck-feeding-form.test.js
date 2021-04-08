import { shallow, mount, render } from 'enzyme'
import DuckFeedingForm from './duck-feeding-form'



it('expect to match DuckFeedingForm snapshot', () => {
    expect(shallow(<DuckFeedingForm />)).toMatchSnapshot()

})