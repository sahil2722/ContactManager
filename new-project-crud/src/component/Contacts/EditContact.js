import React, { Component } from "react";
import { Consumer } from '../../Context'
import axios from "axios"
import TextInputGroup from '../layout/TextInputGroup'

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };
    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    };
    
    onSubmit = async (dispatch, e) =>{
        e.preventDefault();
        const {name, email, phone} = this.state;
        if(name === ''){
            this.setState({errors: {name: "Name is required!"}})
            return
        }
        if(email === ''){
            this.setState({errors: {email: "Email is required!"}})
            return
        }
        if(phone === ''){
            this.setState({errors: {phone: "Phone is required!"}})
            return
        }
        const { id } = this.props.match.params;
        const updatedContact = {
            name,
            email,
            phone
        };

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact);        
        
        dispatch({type: 'UPDATE_CONTACT', payload: res.data});
        
        //Clear After Submit
        this.setState({
          name: '',
          email: '',
          phone: '',
          errors: {}  
        });

        // Redirect
        this.props.history.push('/');
    }

    render() {
        const {name, email, phone, errors} = this.state;
        return ( 
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>        
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

export default EditContact;