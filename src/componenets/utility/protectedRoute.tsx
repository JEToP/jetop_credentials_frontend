import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"

class ProtectedRoute extends Component<protectedRouteProps> {
  render() {
    return (
      <Route
        path={this.props.path}
        render={() =>
          fakeAuth.isAuthenticated ? (
            this.props.children
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        }
      />
    )
  }
}

export default ProtectedRoute

type protectedRouteProps = {
  path: string
}

const fakeAuth = {
  isAuthenticated: true,
}
