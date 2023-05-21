import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './FormInner.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';

const FormInner = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(<FormattedMessage id="form.emailError" />)
      .required(<FormattedMessage id="form.emailRequired" />),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  const intl = useIntl();

  return (
    <section className={styles.form__inner}>
      <div className={styles.container}>
        <p className={styles.form__inner__descr}>
          <FormattedMessage id="form.question" />
        </p>
        <h2 className={styles.form__inner__title}>
          <FormattedMessage id="form.contactUs" />
        </h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off" className={styles.form}>
              <div>
                <label htmlFor="email">
                  <FormattedMessage id="form.emailLabel" />
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder={intl.formatMessage({
                    id: 'form.emailPlaceholder',
                  })}
                  className={styles.form__input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error__message}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.form__button}
              >
                <FormattedMessage id="form.sendButton" />
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormInner;
