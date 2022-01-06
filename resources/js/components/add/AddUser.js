import React, { Component } from 'react';
import axios from 'axios';

import Success from './../element/Success';
import Error from './../element/ErrorUser';

export default class AddUser extends Component {

    constructor()
    {
        super();
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name:'',
            email:'',
            password:'',
            message:'',
        }
    }

    ChangeName(e){
        this.setState({
            name:e.target.value,
        })
    }
    ChangeEmail(e){
        this.setState({
            email:e.target.value,
        })
    }
    ChangePassword(e){
        this.setState({
            password:e.target.value,
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }

        axios.post('/user/store', user)
        .then((response) => {
            this.setState({
                type: 'success',
                message: response.data
            });
        })
        .catch((error) => {
            this.setState({
                type: 'error',
                message: error.reponse.data.errors
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
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.ChangeName} />
                        <label>Email</label>
                        <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.ChangeEmail} />
                        <label>Password</label>
                        <input type="text" className="form-control" id="password" value={this.state.password} onChange={this.ChangePassword} />
                        <button type="submit" className="btn btn-info">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}