import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { selectLoading } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const schema = Yup.object({
  name: Yup.string().min(3).max(30).required('Required'),
  number: Yup.string()
    .matches(/^(\+[\d]{12}|0\d{9})$/, 'Enter a valid number, such as +380501234567 or 0501234567')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <div className={styles.group}>
          <label>Name</label>
          <Field name="name" type="text" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.group}>
          <label>Number</label>
          <Field name="number" type="text" className={styles.input} inputMode="numeric" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button
          type="submit"
          className={`${styles.addButton} ${loading ? styles.disabledButton : ''}`}
          disabled={loading}
        >
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
