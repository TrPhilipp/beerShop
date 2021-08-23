import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Header from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/catalog'} component={Catalog} exact />
        <Route path={'/about'} component={About} exact />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
