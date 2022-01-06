import React, {Component} from 'react';

export default class ErrorBook extends Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div className="alert alert-danger">
                <p>{this.props.message.name}</p>
                <p>{this.props.message.book_no}</p>
                <p>{this.props.message.description}</p>
                <p>{this.props.message.reference_no}</p>
                <p>{this.props.message.published_year}</p>
            </div>
        );
    }
}