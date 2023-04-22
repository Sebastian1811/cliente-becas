import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BecaDetails from './components/becaDetail'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/detail/:id">
            <BecaDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
)