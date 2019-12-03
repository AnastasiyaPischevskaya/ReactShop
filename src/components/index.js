import React, { Component, Fragment } from "react";
import Header from '../includes/header/header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./../pages/main/index";
import CatalogPage from "./../pages/catalog/index";
import ProductPage from "./../pages/catalog/ProductPage";
import BasketPage from "./../pages/basket/index";
import LoginPage from "./../pages/login/index";
import NotFound from "./../pages/404/index";
import history from "../routs/history";
import PrivateRoute from "../routs/privateRoute";

export default class Index extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <BrowserRouter history={history}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" component={LoginPage} />
                        <PrivateRoute exact path="/basket" component={BasketPage} />
                        <Route exact path="/catalog" component={CatalogPage} />
                        <Route exact path="/catalog/product/:id" component={ProductPage} />
                        <Route exact path="/basket" component={BasketPage} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
