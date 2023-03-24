import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter, adminRouter, signRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";
import "react-notifications/lib/notifications.css";
import { ModalContainer } from "./common/modal";
import { useEffect, useState } from "react";
import { AuthProvider } from "./auth/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configs/firebase.configs";
import RouterSigInTemplate from "./templates/signIn";
function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterMainTemplate>
      );
    });
  };
    const renderSigInRouter = () => {
      return signRouter.map(({ path, exact, Component }, index) => {
        return (
          <RouterSigInTemplate
            path={path}
            exact={exact}
            Component={Component}
            key={index}
          ></RouterSigInTemplate>
        );
      });
    };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterAdminTemplate>
      );
    });
  };
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Switch>
            {renderAdminRouter()}
            {renderSigInRouter()}
            {renderMainRouter()}
          </Switch>
        </AuthProvider>
        <ModalContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
