import React, { Component } from 'react';
import axios from 'axios';
import Success from './../element/Success';
import Error from './../element/ErrorStudent';

export default class AddStudent extends Component {

    constructor()
    {
        super();
        this.student_no = this.student_no.bind(this);
        this.first_name = this.first_name.bind(this);
        this.last_name = this.last_name.bind(this);
        this.phone_number = this.phone_number.bind(this);
        this.gender = this.gender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_no:'',
            first_name:'',
            last_name:'',
            phone_number:'',
            gender:'',
            message:''
        }

    }

    student_no(e){
        this.setState({
            student_no:e.target.value,
        });
    }
    first_name(e){
        this.setState({
            first_name:e.target.value,
        });
    }
    last_name(e){
        this.setState({
            last_name:e.target.value,
        });
    }
    phone_number(e){
        this.setState({
            phone_number:e.target.value,
        });
    }
    gender(e){
        this.setState({
            gender:e.target.value,
        });
    }

    onSubmit(e)
    {
        e.preventDefault();
        const student = {
            student_no:this.state.student_no,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            phone_number:this.state.phone_number,
            gender:this.state.gender,
        }
        axios.post('/student/store',student)
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
                    <label>Student No</label>
                    <input type="text" className="form-control" id="student_no" value={this.state.student_no} onChange={this.student_no} />
                    <label>First Name</label>
                    <input type="text" className="form-control" id="first_name" value={this.state.first_name} onChange={this.first_name} />
                    <label>Last Name</label>
                    <input type="text" className="form-control" id="last_name" value={this.state.last_name} onChange={this.last_name} />
                    <label>Phone no.</label>
                    <input type="text" className="form-control" id="phone_number" value={this.state.phone_number} onChange={this.phone_number} />
                    <label>Gender</label>
                    <select className="form-control" id="gender" value={this.state.gender} onChange={this.gender}>
                        <option selected>choose gender</option>';
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <button type="submit" className="btn btn-info">Save</button>
                </div>
            </form>
        </div>
        );
    }
}