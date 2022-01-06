import React, {Component} from 'react';

export default class ErrorUser extends Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div className="alert alert-danger">
                <p>{this.props.message.name}</p>
                <p>{this.props.message.email}</p>
            </div>
        );
    }
}