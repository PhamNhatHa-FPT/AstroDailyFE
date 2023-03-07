import React from "react";
import { Route } from "react-router-dom";
import CoverFooter from "../../components/coverFooter";
import Footer from "../../components/footer";
import Header from "../../components/header";

function MainTemplate(props) {
  //   const { isLogin } = useIsLogin();
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

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <MainTemplate>
          <Component />
        </MainTemplate>
      )}
    />
  );
};

export default RouterMainTemplate;
