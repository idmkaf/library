import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import Add from './../add/AddStudent';
import Data from './../dataList/DataStudent';

export default class Student extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/student" className="btn-info btn-sm">Data</Link>
                    <Link to="/student/add" className="btn-warning btn-sm">Add</Link>

                    <Route exact path='/student' component={Data} />
                    <Route exact path='/student/add' component={Add} />
                </div>
            </Router>
        );
    }
}