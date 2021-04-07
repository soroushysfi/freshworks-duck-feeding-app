import './App.css';


import { Switch, Route } from 'react-router-dom'

import DuckFeedingInfoComponent from './pages/duck-feeding-info/duck-feeding-info.component'
import DuckFeedingSubmitComponent from './pages/duck-feeding-submit/duck-feeding-submit.component'
function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={DuckFeedingSubmitComponent}/>
      <Route exact path='/info' component={DuckFeedingInfoComponent}/>
     </Switch>
    </div>
  );
}

export default App;
