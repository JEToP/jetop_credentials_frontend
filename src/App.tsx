import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import ProtectedRoute from "./componenets/utility/protectedRoute"

import "./App.css"

import LoginPage from "./componenets/login-page/loginPage"
import CredentialsPage from "./componenets/protected-area/credentialsPage"
import Service from "./componenets/protected-area/service"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
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
