import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import Add from './../add/AddBook';
import Data from './../dataList/DataBook';

export default class Book extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/book" className="btn-info btn-sm">Data</Link>
                    <Link to="/book/add" className="btn-warning btn-sm">Add</Link>

                    <Route exact path='/book' component={Data} />
                    <Route exact path='/book/add' component={Add} />
                </div>
            </Router>
        );
    }
}