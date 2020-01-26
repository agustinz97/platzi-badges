import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Badges from '../Badges/Badges';
import NewBadge from '../NewBadge/NewBadge';
import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={NewBadge} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;