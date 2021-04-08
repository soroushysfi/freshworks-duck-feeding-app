import './App.scss';


import { Switch, Route, Link } from 'react-router-dom'

import DuckFeedingInfoComponent from './pages/duck-feeding-info/duck-feeding-info.component'
import DuckFeedingSubmitComponent from './pages/duck-feeding-submit/duck-feeding-submit.component'
function App() {
  return (
    <div >
      <div className='link-div'>
      <Link className='top-link-style' to='/'><span className='link-text'>Form</span></Link>
      <Link className='top-link-style' to='/info'><span className='link-text'>See Submitted Data</span></Link>
      </div>
      <Switch>
      <Route exact path='/' component={DuckFeedingSubmitComponent}/>
      <Route exact path='/info' component={DuckFeedingInfoComponent}/>
     </Switch>
    </div>
  );
}

export default App;
