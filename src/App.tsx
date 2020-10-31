import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import ProtectedRoute from "./components/utility/protectedRoute"

import "./App.css"

import LoginScreen from "./components/templates/login/LoginScreen.style"
import ServicesPage from "./components/templates/protected-area/ServicesPage"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <ProtectedRoute path="/services/:id?">
          <ServicesPage />
        </ProtectedRoute>
        <ProtectedRoute path="*">
          <Redirect to={{ pathname: "/services" }} />
        </ProtectedRoute>
      </Switch>
    </Router>
  )
}

export default App
