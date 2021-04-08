import './App.scss';


import { Switch, Route, Link } from 'react-router-dom'

import DuckFeedingInfoComponent from './pages/duck-feeding-info/duck-feeding-info.component'
import DuckFeedingPageComponent from './pages/duck-feeding-page/duck-feeding-page.component'
function App() {
  return (
    <div >
      <div className='link-div'>
      <Link className='top-link-style' to='/'><span className='link-text'>Form</span></Link>
      <Link className='top-link-style' to='/info'><span className='link-text'>Report (last 10 dates)</span></Link>
      </div>
      <Switch>
      <Route exact path='/' component={DuckFeedingPageComponent}/>
      <Route exact path='/info' component={DuckFeedingInfoComponent}/>
     </Switch>
    </div>
  );
}

export default App;
