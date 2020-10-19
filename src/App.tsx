import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import "./App.css"

import LoginPage from "./componenets/loginPage/loginPage"
import CredentialsPage from "./componenets/protectedArea/credentialsPage"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route
          path="/services-credentials"
          render={() =>
            fakeAuth.isAuthenticated ? (
              <CredentialsPage />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )
          }
        />
        <Route
          path="*"
          render={() =>
            fakeAuth.isAuthenticated ? (
              <Redirect to={{ pathname: "/services-credentials" }} />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )
          }
        />
      </Switch>
    </Router>
  )
}

export default App

const fakeAuth = {
  isAuthenticated: false,
}
