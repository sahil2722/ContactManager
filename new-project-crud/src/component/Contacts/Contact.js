import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from 'axios';
import {Link} from 'react-router-dom'

class Contact extends Component {
  state = {
    visible: false
  };

  onDeleteClick = (id , dispatch) => {

  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(response =>   
  dispatch({type:'DELETE_CONTACT' , payload:id}))
      
  };

  render() {
    const { id,name, email, phone  } = this.props.contact;
    const { visible } = this.state;

    return (
      <Consumer>
        {value => {
            const {dispatch} = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  className="fa fa-plus"
                  onClick={() =>
                    this.setState({
                      visible: !this.state.visible
                    })
                  }
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this,id,dispatch)}
                />

                <Link to={`contact/edit/${id}`}>
                <i className="fa fa-pencil mr-10"  style={{ cursor: "pointer",marginRight:'1rem', float: "right", color: "black" }}></i>
                </Link>
              </h4>
              {visible ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired
};
export default Contact;
