import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import classes from './App.module.css'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Header from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={classes.App}>
        <Switch>
          <Route path={'/catalog'} component={Catalog} exact />
          <Route path={'/about'} component={About} exact />
          <Route path={'/'} component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
