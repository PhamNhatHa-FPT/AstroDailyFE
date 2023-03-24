import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function AdminTemplate(props) {
  return <main>{props.children}</main>;
}

const RouterAdminTemplate = ({ path, exact, Component }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        user && user.userRole === "admin" ? (
          <AdminTemplate>
            <Component />
          </AdminTemplate>
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default RouterAdminTemplate;
