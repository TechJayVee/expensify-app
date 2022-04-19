import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from  '../components/ExpenseDashboardPage';
import addExpensePage from  '../components/addExpensePage';
import edithExpensePage from  '../components/edithExpensePage';
import helpExpensePage from  '../components/helpExpensePage';
import NotfoundDashboardPage from  '../components/NotfoundDashboardPage';
import Header from  '../components/Header';

const AppRouter = ()=> (
    <BrowserRouter>
    <div>
    <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={addExpensePage} />
            <Route path="/edit/:id" component={edithExpensePage} />
            <Route path="/help" component={helpExpensePage} />
            <Route component={NotfoundDashboardPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;
