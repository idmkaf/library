import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import Add from './../add/AddUser';
import Data from './../dataList/DataUser';

export default class User extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/user" className="btn-info btn-sm">Data</Link>
                    <Link to="/user/add" className="btn-warning btn-sm">Add</Link>

                    <Route exact path='/user' component={Data} />
                    <Route exact path='/user/add' component={Add} />
                </div>
            </Router>
        );
    }
}