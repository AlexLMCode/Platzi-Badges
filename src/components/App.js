import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "./Layout"
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/*Con exact le decimos que valide la ruta exacta */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route path="/404" component={NotFound}/>
                    <Redirect from="*" to="/404"/>
                </Switch>
            </Layout>

        </BrowserRouter>
    );
}

export default App;