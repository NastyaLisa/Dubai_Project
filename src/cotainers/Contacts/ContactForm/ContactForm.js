import React, { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
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
      .matches(/^[A-Za-zА-Яа-я]+\s?[A-Za-zА-Яа-я]*$/, 'Invalid name format'),
    email: Yup.string().email('Invalid email address').required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const sendMail = (values, { resetForm }) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/send');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.response);
          resetForm();
          console.log(response.message);
        } else {
          console.error('Error sending email');
        }
      }
    };
    xhr.onerror = () => {
      console.error('Error');
    };
    xhr.send(
      `name=${name}&email=${email}&subject=${subject}&message=${message}`,
    );
  };




  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <h2 className={styles.form__title}>
          <FormattedMessage id="contact.form.subtitle" />
          <span>
            <FormattedMessage id="contact.form.subtitle.accent" />
          </span>
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={sendMail}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off" className={styles.form}>
              <div className={styles.form__row}>
                <label htmlFor="name">Name</label>
                <Field
                  innerRef={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className={`${styles.form__input} ${
                    errors.name && touched.name ? styles.invalid : ''
                  }`}
                />

                <label htmlFor="email">Email</label>
                <Field
                  innerRef={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  className={`${styles.form__input} ${
                    errors.email && touched.email ? styles.invalid : ''
                  }`}
                />

                <label htmlFor="subject">Subject</label>
                <Field
                  innerRef={subjectRef}
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className={`${styles.form__input} ${
                    errors.subject && touched.subject ? styles.invalid : ''
                  }`}
                />
              </div>
              <label htmlFor="message">Message</label>
              <Field
                innerRef={messageRef}
                as="textarea"
                id="message"
                name="message"
                placeholder="Message *"
                className={`${styles.form__textarea} ${
                  errors.message && touched.message ? styles.invalid : ''
                }`}
              />

              <button type="submit" className={styles.form__btn}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
