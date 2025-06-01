import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectDeletingId } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const deletingId = useSelector(selectDeletingId);
  const isDeleting = deletingId === contact.id;

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.card}>
      <div>
        <p>👤 {contact.name}</p>
        <p>📞 {contact.number}</p>
      </div>
      <button
        className={`${styles.deleteButton} ${
          isDeleting ? styles.disabled : ''
        }`}
        onClick={handleDelete}
        disabled={isDeleting}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
