import React, { Component } from 'react';
import Header from './Header';
import './AddContact.css';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: '',
            email: ''
        }
    }

    changeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    /*onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.editHandler(this.state);
        this.setState({ id: 0, name: '', phone: ' ', email: ' ' });
        this.props.history.push("/");
    }*/

    render() {
        const { name, phone, email } = this.state;
        return (
            <div>
                <Header heading="Edit" />
                <div className="conatinerBody">
                    <Link to="/">
                        <button className="customBtn">Back</button>
                    </Link>

                    <form className="contactForm" /*onSubmit={this.onFormSubmitted.bind(this)}*/>
                        <label htmlFor="name" className="labels">Name: </label><br />
                        <input id="name" type="text" className="inputs" name="name" onChange={this.changeHandler} /><br /><br />
                        <label htmlFor="phone" className="labels">Phone: </label><br />
                        <input id="phone" type="text" className="inputs" name="phone" onChange={this.changeHandler} /><br /><br />
                        <label htmlFor="email" className="labels">Email: </label><br />
                        <input id="email" type="email" className="inputs" name="email" onChange={this.changeHandler} /><br /><br />
                        <button type="submit" className="customBtn addBtn">Done</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Edit;