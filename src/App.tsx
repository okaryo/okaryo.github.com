import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Profile from './components/Profile'
import Footer from './components/Footer'
import NavigationStyle from './constants/NavigationStyle'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header
            navigationStyle={NavigationStyle.activeProducts}
          />
          <Products />
        </Route>
        <Route exact path="/products">
          <Header
            navigationStyle={NavigationStyle.activeProducts}
          />
          <Products />
        </Route>
        <Route path="/profile">
          <Header
            navigationStyle={NavigationStyle.activeProfile}
          />
          <Profile />
        </Route>
        <Route path="/contact">
          <Header
            navigationStyle={NavigationStyle.activeContact}
          />
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

const Contact = () => {
  return <p>contact</p>
}

export default App;
