import { Component } from "react";
import { nanoid } from "nanoid";

import contactList from "./contacts.json";
import { ContactForm } from "./ContactForm";
import { ContactFilter } from "./ContactFilter";
import { ContactList } from "./ContactList";

const localStorageKey = "contactKey"

export class ContactBook extends Component {
  state = {
    contacts: contactList,
    name: "",
    number: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(localStorageKey);

    if(savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts)
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(this.state.contacts))
    }
  }

  onDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((el) => {
          return el.id !== id;
        }),
      };
    });
  };

  addElement = (newItem) => {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            ...newItem,
            id: nanoid(),
          },
        ],
      };
    });
  };

  render() {
    const visibleContacts = this.state.contacts.filter((el) => {
      return el.name
        .toLowerCase()
        .includes(this.state.name.toLowerCase());
    });

    return (
      <>
        <h1>Contacts Book</h1>
        <ContactForm onAdd={this.addElement} />
        <ContactFilter contacts={this.state.contacts}/>
        <ContactList items={visibleContacts} onDelete={this.onDelete} />
      </>
    );
  }
}
