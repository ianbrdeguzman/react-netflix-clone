import React from 'react';
import GlobalStyle from './GlobalStyle';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={SignIn} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </Router>
    );
};

export default App;
