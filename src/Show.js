import React, { Component } from 'react';
import Header from './Header.js';
import './Show.css';
import { Link } from 'react-router-dom';

class Show extends Component {

  onDeletedClick = (contactId) => {
    this.props.deleteContactHandler(contactId); 
  }
  

  render() {
    return (
      <div>
        <Header heading="Phone Directry" />
        <div className="conatinerBody">
          <Link to="/add">
            <button className="customBtn addBtn">Add</button>
          </Link>
          

          <div className="container headingContainer">
            <span className="gridItem nameHeading">Name</span>
            <span className="gridItem phoneHeading">Phone</span>
            <span className="gridItem phoneHeading">Email</span>
          </div>

          {
            this.props.contactsList.map(sub => {
              return <div key={sub.id} className="container">
                <span className="gridItem">{sub.name}</span>
                <span className="gridItem">{sub.phone}</span>
                <span className="gridItem">{sub.email}</span>
                <span className="gridItem edit-delete-container">
                <Link to="/edit">
                  <button className="customBtn addBtn" id={sub.id} >Edit</button>
                </Link>
                  <button className="customBtn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Show;