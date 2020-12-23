import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Deputados from '../pages/Deputados';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/deputados" component={ Deputados } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;