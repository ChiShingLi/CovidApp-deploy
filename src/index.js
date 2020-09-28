import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import { HashRouter, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: "#F2F2F2" }}>
      <TopNavbar />
      <HashRouter basename="/">
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Detail/:id" component={Detail} />
      </HashRouter>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
