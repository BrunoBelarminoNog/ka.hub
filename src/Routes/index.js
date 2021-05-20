import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    const id = JSON.parse(localStorage.getItem("@KenzieHub:id"));

    if (token) {
      setAuthenticated(true);
    }

    if (id) {
      setUserId(id)
    }
  }, [authenticated]);

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
