import { shallow, mount, render } from 'enzyme'
import DuckFeedingInfoBoxComponent from './duck-feeding-info-box.component'

let item;

beforeEach(() => {
     item = {feedingTime: '', duckCount: '', foodType: ''}
})
it('expect to match DuckFeedingInfoBoxComponent snapshot', () => {
    expect(shallow(<DuckFeedingInfoBoxComponent item={item}/>)).toMatchSnapshot()

})