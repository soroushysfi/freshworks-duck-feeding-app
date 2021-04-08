import { shallow } from 'enzyme'
import CustomInputComponent from './custom-input.component'

describe("CustomInput Component tests", () => {
it('expect to match CustomInputComponent snapshot', () => {
    expect(shallow(<CustomInputComponent />)).toMatchSnapshot()

})
})