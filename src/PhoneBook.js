import React, { Component } from 'react';
import AddContact from './AddContact';
import Show from './Show';
import Edit from './Edit';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneBook extends Component {

    constructor() {
        super();
        this.state = {
            contactsList: [
                {
                    id: 1,
                    name: "Aviral",
                    phone: "1111111111",
                    email: "abc@abc.com"
                },
                {
                    id: 2,
                    name: "Ayush",
                    phone: "2222222222",
                    email: "abc@abc.com"
                },
                {
                    id: 3,
                    name: "Areeb",
                    phone: "3333333333",
                    email: "abc@abc.com"
                }
            ]
        }
    }

    deleteContactHandler = (contactId) => {
        let contactsList = this.state.contactsList;
        let contactIndex = 0;
        contactsList.forEach(function (contact, index) {
            if (contact.id === contactId) {
                contactIndex = index;
            }
        }, this);
        let newcontacts = contactsList;
        newcontacts.splice(contactIndex, 1);
        this.setState({contacts: newcontacts});
    }

    AddContactHandler = (newcontact) => {
        let contactsList = this.state.contactsList;
        if (contactsList.length > 0) {
            newcontact.id = contactsList[contactsList.length - 1].id + 1;
        } else {
            newcontact.id = 1;
        }
        contactsList.push(newcontact);
        this.setState({ contactsList: contactsList });
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <Show {...props} contactsList={this.state.contactsList} deleteContactHandler={this.deleteContactHandler} />} />
                    <Route exact path="/add" render={({history}, props) => <AddContact history={history} {...props} AddContactHandler={this.AddContactHandler} />} />
                    <Route exact path="/edit" render={({history}, props) => <Edit history={history} {...props} AddContactHandler={this.AddContactHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneBook;