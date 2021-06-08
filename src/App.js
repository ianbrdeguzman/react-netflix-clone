import React from 'react';
import GlobalStyle from './GlobalStyle';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Browse from './pages/browse/Browse';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path='/login/:email' component={SignIn} />
                <Route path='/login' component={SignIn} />
                <Route path='/register' component={Register} />
                <Route path='/profile' component={Profile} />
                <Route path='/browse' component={Browse} />
                <Route exact path='/' component={Home} />
                <Route path='/*' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
