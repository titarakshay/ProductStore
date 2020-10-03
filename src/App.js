import React from "react";
import { connect } from "react-redux";
import "react-bootstrap";
import "bootstrap";
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header.jsx";
import "./style/style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import EditProduct from "./components/EditProduct.jsx";

class App extends React.Component {
  render() {
    const { products } = this.props.state;
    console.log(products);
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

function mapState(state) {
  return { state };
}

export default connect(mapState)(App);
