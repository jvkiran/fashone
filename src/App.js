import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import {
  DefaultFashionista,
  MainFashionista,
} from "./pages/default_fashionista";
import {
  DefaultFashionseeker,
  MainFashionseeker,
} from "./pages/default-fashionseeker";
import { StaRegister, SeekerRegister } from "./pages/register";
import { Privacy, Terms } from "./pages/privacy";
import Faq from "./pages/faq";

import "./App.scss";
import "./assets/font/sofiapro/style.css";
import "./assets/font/helvetica/style.css";

function App() {
  useEffect(() => {
    const cookieContainer = document.getElementById("cookieContainer");
    setTimeout(() => {
      if (!localStorage.getItem("acceptCookie")) {
        cookieContainer.classList.add("app-cookie-active");
      }
    }, 1000);
  });

  const closeCookie = () => {
    document
      .getElementById("cookieContainer")
      .classList.remove("app-cookie-active");
  };

  const acceptCookie = () => {
    document
      .getElementById("cookieContainer")
      .classList.remove("app-cookie-active");
    localStorage.setItem("acceptCookie", "true");
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DefaultFashionseeker} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/defaultsta" component={DefaultFashionista} />
          <Route exact path="/Fashionista" component={MainFashionista} />
          <Route exact path="/FashionSeeker" component={MainFashionseeker} />
          <Route exact path="/FashionistaRegister" component={StaRegister} />
          <Route exact path="/FashionRegister" component={SeekerRegister} />
        </Switch>
        <div id="cookieContainer" className="app-cookie">
          <p className="app-cookie-desc">
            We use cookies to improve your experience and out services. By using
            Fashone, you agree to our{" "}
            <a href="/privacy#cookies-policy">Cookie Policy</a>.
          </p>
          <div className="app-cookie-button">
            <div
              className="app-cookie-button-accept"
              onClick={() => {
                acceptCookie();
              }}
            >
              accept
            </div>
            <div
              className="app-cookie-button-close"
              onClick={() => {
                closeCookie();
              }}
            >
              close
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
