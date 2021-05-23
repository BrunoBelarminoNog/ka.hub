import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Routes = ({authenticated, setAuthenticated, userId}) => {
  

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          authenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Home setAuthenticated={setAuthenticated} />
          )
        }
      />
      <Route
        path="/cadastro"
        render={() =>
          authenticated ? <Redirect to="/dashboard" /> : <SignUp />
        }
      />
      <Route
        path="/dashboard"
        render={() =>
          authenticated ? (
            <Dashboard setAuthenticated={setAuthenticated} userId={userId}/>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </Switch>
  );
};

export default Routes;
