import { shallow } from 'enzyme'
import { createMemoryHistory } from "history";


import HeaderComponent from './header.component'

describe("Header Component tests", () => {
it('expect to match HeaderComponent snapshot', () => {
    expect(shallow(<HeaderComponent />)).toMatchSnapshot()

})

it('expect route to be at homepage', () => {
    const history = createMemoryHistory();
    expect(history.location.pathname).toBe("/");

})

})


