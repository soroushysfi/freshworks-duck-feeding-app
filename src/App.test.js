import { shallow, mount, render } from 'enzyme'
import App from './App';

test('App component snapshot test', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
