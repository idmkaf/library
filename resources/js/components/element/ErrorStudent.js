import React, {Component} from 'react';

export default class ErrorStudent extends Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div className="alert alert-danger">
                <p>{this.props.message.stydent_no}</p>
                <p>{this.props.message.first_name}</p>
                <p>{this.props.message.last_name}</p>
                <p>{this.props.message.phone_number}</p>
                <p>{this.props.message.gender}</p>
            </div>
        );
    }
}