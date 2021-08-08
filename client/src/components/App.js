import React, {useEffect} from 'react';
import Navbar from "./Navbar/Navbar";
import './App.css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Registration from "./Authorization/Registration";
import Profile from "./Profile/Profile"
import Login from "./Authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Disk from './Disk/Disk';

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                    <Switch>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Redirect to="/login"/>
                    </Switch>
                    :
                    <Switch>
                        <Route exact path="/" component={Disk}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Redirect to="/"/>
                    </Switch>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;