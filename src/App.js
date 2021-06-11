import React, { useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Browse from './pages/browse/Browse';
import Title from './pages/title/Title';
import MyList from './pages/mylist/MyList';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { signinSuccess } from './redux/slices/userLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './helpers/firebase';

const App = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.userLogin);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signinSuccess(JSON.stringify(user)));
            }
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path='/login/:email' component={SignIn} />
                <Route path='/login' component={SignIn} />
                <Route path='/register' component={Register} />
                <Route path='/profile'>
                    {!user ? <Redirect to='/' /> : <Profile />}
                </Route>
                <Route path='/browse/my-list'>
                    {!user ? <Redirect to='/' /> : <MyList />}
                </Route>
                <Route path='/browse'>
                    {!user ? <Redirect to='/' /> : <Browse />}
                </Route>
                <Route path='/title/:id/:type'>
                    {!user ? <Redirect to='/' /> : <Title />}
                </Route>
                <Route exact path='/' component={Home} />
                <Route path='/*' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
