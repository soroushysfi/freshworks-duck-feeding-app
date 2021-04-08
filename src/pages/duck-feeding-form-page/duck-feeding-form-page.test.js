import { shallow } from 'enzyme'
import DuckFeedingFormPageComponent from './duck-feeding-form-page.component'


it('expect to match DuckFeedingFormPage snapshot', () => {
    expect(shallow(<DuckFeedingFormPageComponent />)).toMatchSnapshot()

})