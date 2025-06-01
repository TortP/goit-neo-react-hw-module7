import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter(
    (c) => c.name.toLowerCase().includes(filter) || c.number.includes(filter)
  );

  return (
    <ul className={styles.list}>
      {visibleContacts.map((c) => (
        <Contact key={c.id} contact={c} />
      ))}
    </ul>
  );
};

export default ContactList;
