import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Book from './pages/Book';
import Student from './pages/Student';
import User from './pages/User';

export default class Navbar extends Component {
    render() {
        return (
            <Router>
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/home">Library</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeStyle={{color:"white"}} exact to="/book" className="nav-link">Book</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{color:"white"}} exact to="/home" className="nav-link">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{color:"white"}} exact to="/student" className="nav-link">Student</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{color:"white"}} exact to="/user" className="nav-link">User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        <Route exact path='/home' component={Dashboard} />
        <Route exact path='/user' component={User} />
        <Route exact path='/book' component={Book} />
        <Route exact path='/student' component={Student} />
        </div>
        </Router>
        );
    }
}