import React, { Component } from "react";
import { Consumer } from '../../Context'
import axios from "axios"
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}

        
    };

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = (dispatch, e) => {
        e.preventDefault()

        const { name, email, phone } = this.state

        const newContact = {
           
            name, email, phone
        };

        axios.post('https://jsonplaceholder.typicode.com/users').then(
            response =>   dispatch({ type: 'ADD_CONTACT', payload: newContact })
        )

      

        //To clear the Fields after Submit
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors: {}

           
        });

        this.props.history.push('/')
    

        //Validations

        if(name === ''){
            this.setState({
                error:{name : 'Name is Required'}
            });
            return;
        }

        if(email === ''){
            this.setState({
                error:{email : 'Name is Required'}
            });
            return;
        }
        if(phone === ''){
            this.setState({
                error:{phone : 'Name is Required'}
            });
            return;
        }

    }

    render() {
        const {name, email, phone, errors} = this.state;
        return ( 
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>        
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup 
                                        lable="Name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        placeholder="Enter Name ..."
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        lable="Email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        placeholder="Enter Email ..."
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        lable="Phone"
                                        name="phone"
                                        type="text"
                                        value={phone}
                                        placeholder="Enter Phone ..."
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input 
                                    type="submit" 
                                    value="Add Contact" 
                                    className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default AddContact;