import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import ProtectedRoute from "./components/utility/protectedRoute"

import "./App.css"

import CredentialsPage from "./components/templates/protected-area/credentialsPage"
import LoginScreen from "./components/templates/login/LoginScreen.style"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <ProtectedRoute path="/services-credentials">
          <CredentialsPage />
        </ProtectedRoute>
        <ProtectedRoute path="*">
          <Redirect to={{ pathname: "/services-credentials" }} />
        </ProtectedRoute>
      </Switch>
    </Router>
  )
}

export default App
