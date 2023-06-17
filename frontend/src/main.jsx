import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/home'
import About from './routes/about'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import BecaDetails from './components/becaDetail'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/detail/:id">
            <BecaDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Redirect to="/page/0" />
          </Route>
          <Route path="/page/:page">
            <Home/>
          </Route>
           
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
)