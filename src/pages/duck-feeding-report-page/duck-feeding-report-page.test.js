import { shallow } from 'enzyme'
import DuckFeedingReportPage from './duck-feeding-report-page'


it('expect to match DuckFeedingReportPage snapshot', () => {
    expect(shallow(<DuckFeedingReportPage duckFeedingInfo = {[]} />)).toMatchSnapshot()

})