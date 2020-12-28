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
import ServiceData from "./components/atoms/service-data/ServiceData"
import Service from "./models/Service"

function App() {
  let propsService : Service = {name: "test"};
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <ProtectedRoute path="/services/:id?">
          <ServiceData service={propsService}/>
        </ProtectedRoute>
        <ProtectedRoute path="*">
          <Redirect to={{ pathname: "/services" }} />
        </ProtectedRoute>
      </Switch>
    </Router>
  )
}

export default App
