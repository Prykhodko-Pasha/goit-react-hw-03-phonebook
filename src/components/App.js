import React from 'react';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import ContactsSearch from './ContactsSearch/ContactsSearch';
import s from './Contacts/Contacts.module.css';

export default class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  countContats = () => this.state.contacts.length;

  filteredContactsArr = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };

  onAddContact = contact => {
    const isContactExist = this.state.contacts.filter(
      con => con.name.toLowerCase() === contact.name.toLowerCase(),
    );
    if (isContactExist.length === 0) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

  onSearch = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    let total = this.countContats();

    return (
      <>
        <Section title="Phonebook">
          <Form onAddContact={this.onAddContact} />
        </Section>
        <Section title="Contacts">
          {total > 0 ? (
            <>
              <ContactsSearch
                value={this.state.filter}
                onChange={this.onSearch}
              />
              <Contacts
                contactsArr={this.filteredContactsArr()}
                onDeleteContact={this.onDeleteContact}
              />
            </>
          ) : (
            <div className={s.wrapper}>
              <p className={s.text}>No contacts yet</p>
            </div>
          )}
        </Section>
      </>
    );
  }
}
