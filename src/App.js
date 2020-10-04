import React from "react";
import "react-bootstrap";
import "bootstrap";
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header.jsx";
import "./style/style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import EditProduct from "./components/EditProduct.jsx";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/product/:id" component={EditProduct} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
