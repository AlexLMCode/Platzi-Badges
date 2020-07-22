import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/*Con exact le decimos que valide la ruta exacta */}
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
            </Switch>

        </BrowserRouter>
    );
}

export default App;