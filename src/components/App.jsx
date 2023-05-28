import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import contacts from './data/contactsData.json';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  // Добавление нового контакта в список контактов
  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  // Изменение значения фильтра
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  // Получение отфильтрованных контактов
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Удаление контакта из списка
  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 ? (
         // Фильтр для отображения контактов
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        ) : (
          <wrapper>Your phonebook is empty. Add first contact!</wrapper>
        )}
        {this.state.contacts.length > 0 && (
          // Список контактов
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}

export default App;
