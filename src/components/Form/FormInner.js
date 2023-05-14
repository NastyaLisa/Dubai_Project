import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import styles from './FormInner.module.scss';

const FormInner = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
   
  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <section className={styles.form__inner}>
      <div className={styles.container}>
        <p className={styles.form__inner__descr}>Do you have any questions?</p>
        <h2 className={styles.form__inner__title}>Contact us</h2>
        <Formik initialValues={initialValues} 
          onSubmit={handleSubmit} 
          validationSchema={validationSchema}>

          {({ isSubmitting }) => (
            <Form autoComplete="off" className={styles.form}>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Email *" className={styles.form__input}  />
                {/* <ErrorMessage name="email" component="div" className={styles.error__message} /> */}
              </div>
              <button type="submit" disabled={isSubmitting} className={styles.form__button}>Send</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>

  );
};

export default FormInner;

