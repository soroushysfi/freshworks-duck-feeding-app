import './App.scss';


import { Switch, Route } from 'react-router-dom'

import HeaderComponent from './components/header/header.component'
import DuckFeedingReportPageComponent from './pages/duck-feeding-report-page/duck-feeding-report-page.component'
import DuckFeedingFormPageComponent from './pages/duck-feeding-form-page/duck-feeding-form-page.component'

// parent component
// provides route to '/' and '/report' page
function App() {
  return (
    <div >
      <HeaderComponent />
      <Switch>
      <Route exact path='/' component={DuckFeedingFormPageComponent}/>
      <Route exact path='/report' component={DuckFeedingReportPageComponent}/>
     </Switch>
    </div>
  );
}

export default App;
