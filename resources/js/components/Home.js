import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />

                <Footer />
            </div>
        );
    }
}

if (document.getElementById('content')) {
    ReactDOM.render(<Home />, document.getElementById('content'));
}
