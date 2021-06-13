import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import IndexPage from "./components/Index/index"
import MovieInfo from "./components/MovInfo/MovieInfo";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/MovieInfo" component={MovieInfo} />
                </Switch>
            </Router>
        )
    }
}