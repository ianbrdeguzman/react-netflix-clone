import React from 'react';
import GlobalStyle from './GlobalStyle';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/signin/SignIn';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={SignIn} />
            </Switch>
        </Router>
    );
};

export default App;
