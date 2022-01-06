import React, { Component } from 'react';
import axios from 'axios';
import Success from './../element/Success';
import Error from './../element/ErrorBook';

export default class AddBook extends Component {

    constructor()
    {
        super();
        this.name = this.name.bind(this);
        this.description = this.description.bind(this);
        this.publishedYear = this.publishedYear.bind(this);
        this.bookNo = this.bookNo.bind(this);
        this.referenceNo = this.referenceNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            description:'',
            published_year:'',
            book_no:'',
            reference_no:'',
            message:''
        }
    }

    name(e){
        this.setState({
            name:e.target.value,
        });
    }
    description(e){
        this.setState({
            description:e.target.value,
        });
    }
    publishedYear(e){
        this.setState({
            publishedYear:e.target.value,
        });
    }
    bookNo(e){
        this.setState({
            bookNo:e.target.value,
        });
    }
    referenceNo(e){
        this.setState({
            referenceNo:e.target.value,
        });
    }

    onSubmit(e)
    {
        e.preventDefault();
        const book = {
            name:this.state.name,
            description:this.state.description,
            published_year:this.state.publishedYear,
            book_no:this.state.bookNo,
            reference_no:this.state.referenceNo,
        }
        axios.post('/book/store',book)
        .then((response)=>{
            this.setState({
                type:'success',
                message:response.data
            });
        })
        .catch((error)=>{
            this.setState({
                type: 'error',
                message: error.response.data.errors
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.type=="success"?<Success message={this.state.message} />:null}
                {this.state.type=="error"?<Error message={this.state.message} />:null}
                <form onSubmit={this.onSubmit}>
                <div className="form-group col-sm-6">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.name} />
                    <label>Description</label>
                    <input type="text" className="form-control" id="description" value={this.state.description} onChange={this.description} />
                    <label>Published Year</label>
                    <input type="text" className="form-control" id="published_year" value={this.state.publishedYear} onChange={this.publishedYear} />
                    <label>Book no.</label>
                    <input type="text" className="form-control" id="book_no" value={this.state.bookNo} onChange={this.bookNo} />
                    <label>Reference no.</label>
                    <input type="text" className="form-control" id="reference_no" value={this.state.referenceNo} onChange={this.referenceNo} />

                    <button type="submit" className="btn btn-info">Save</button>
                </div>
            </form>
        </div>
        );
    }
}