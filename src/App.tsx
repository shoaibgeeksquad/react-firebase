import React  from 'react'
import './tailwind.css'
import './tailwind.output.css'
import { Switch, withRouter } from 'react-router-dom';
import Route from './routes'
import { GlobalProvider } from './context/globalContext/globalContext'

const App = () => {

  return (
    <GlobalProvider>
      <Switch>
        <Route />
      </Switch>
    </GlobalProvider>
  );
}
export default withRouter(App);