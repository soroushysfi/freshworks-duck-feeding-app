import { shallow } from 'enzyme'
import HeaderComponent from './header.component'

describe("Header Component tests", () => {
it('expect to match HeaderComponent snapshot', () => {
    expect(shallow(<HeaderComponent />)).toMatchSnapshot()

})
})