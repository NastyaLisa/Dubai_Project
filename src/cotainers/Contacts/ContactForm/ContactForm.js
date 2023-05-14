import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.scss';

const ContactForm = () => {

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required')
      .matches(/^[A-Za-z]+$/, 'Invalid name format'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <h2 className={styles.form__title}><span>Be in touch </span> <br/>with us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({errors, touched}) => (
            <Form autoComplete="off" className={styles.form}>
              <div className={styles.form__row}>
              
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" placeholder="Name" className={`${styles.form__input} ${errors.name && touched.name ? styles.invalid : ''}`} />
         
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Email *" className={`${styles.form__input} ${errors.email && touched.email ? styles.invalid : ''}`} />
         
                <label htmlFor="subject">Subject</label>
                <Field type="text" id="subject" name="subject" placeholder="Subject" className={`${styles.form__input} ${errors.subject && touched.subject ? styles.invalid : ''}`} />
              </div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" placeholder="Message *" className={`${styles.form__textarea} ${errors.message && touched.message ? styles.invalid : ''}`} />
         
              <button type="submit" className={styles.form__btn}>Submit</button>
              
            </Form>
         
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
