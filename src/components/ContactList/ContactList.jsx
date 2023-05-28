import React from 'react';
import PropTypes from 'prop-types';

// Компонент списка контактов
const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // Кнопка удаления контакта
          <button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;