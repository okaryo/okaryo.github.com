import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

const Profile = () => {
  return <p>profile</p>
}
const Contact = () => {
  return <p>contact</p>
}

export default App;
