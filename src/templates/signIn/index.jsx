import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import CoverFooter from "../../components/coverFooter";
import Footer from "../../components/footer";
import Header from "../../components/header";

function SigInTemplate(props) {
  return (
    <div
      id="page-container"
      className="et-animated-content"
      style={{ paddingTop: "79px" }}
    >
      <Header />
      <div id="main-content">
        <article
          id="post-242798"
          className="post-242798 page type-page status-publish hentry"
        >
          <div className="entry-content">
            <div className="et-l et-l--post">{props.children}</div>
          </div>
        </article>
      </div>
      <CoverFooter />
      <Footer />
    </div>
  );
}

const RouterSigInTemplate = ({ path, exact, Component }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        !user ? (
          <SigInTemplate>
            <Component />
          </SigInTemplate>
        ) : user.userRole === "admin" ? (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
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

export default RouterSigInTemplate;
