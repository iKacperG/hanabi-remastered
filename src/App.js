import React from 'react';
import './scss/main.scss';
import Landing from "./components/landing_page/common/Landing";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route, Router} from "react-router";
import createBrowserHistory from 'history/createBrowserHistory'
import CardsLeftProvider from "./providers/CardsLeftProvider";
import Table from "./components/game_page/Table";
import {OrderContext} from "./providers/CardsLeftContext";
import OrderProvider from "./providers/OrderProvider";


function App() {
    const newHistory = createBrowserHistory();
    return (
        <OrderProvider>
        <CardsLeftProvider>
            <Router history={newHistory}>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Table}/>
                    </Switch>
                </div>
            </Router>
        </CardsLeftProvider>
        </OrderProvider>
    );
}

export default App;
