import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './Popup.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

const Popup = ({ hide }) => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [telValid, setTelValid] = useState(true);

  const closePopup = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    hide(false);
  };

  const intl = useIntl();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameValid(value.trim() !== ''); 
  };

  const handleTelChange = (e) => {
    const value = e.target.value;
    setTel(value);
    setTelValid(/^\d+$/.test(value)); 
  };

  

  return (
    <div className={styles.popup} onClick={() => hide(false)}>
      <div className={styles.popup__main} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup__container}>
          <h2 className={styles.title}>
            <FormattedMessage id="popup.title" />
          </h2>
          <p className={styles.subtitle}>
            <FormattedMessage id="popup.subtitle" />
          </p>
          <form className={styles.form} >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                <FormattedMessage id="popup.nameLabel" />
              </label>
              <input
                type="text"
                id="name"
                className={`${styles.input} ${nameValid ? '' : styles.invalid}`}
                placeholder={intl.formatMessage({
                  id: 'popup.namePlaceholder',
                })}
                value={name}
                onChange={handleNameChange}
              />
              {!nameValid && (
                <p className={styles.error}>
                  <FormattedMessage id="popup.nameValidation" />
                </p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="tel" className={styles.label}>
                <FormattedMessage id="popup.telLabel" />
              </label>
              <input
                type="tel"
                id="tel"
                className={`${styles.input} ${telValid ? '' : styles.invalid}`}
                placeholder={intl.formatMessage({
                  id: 'popup.telPlaceholder',
                })}
                pattern="[0-9]*"
                value={tel}
                onChange={handleTelChange}
              />
              {!telValid && (
                <p className={styles.error}>
                  <FormattedMessage id="popup.telValidation" />
                </p>
              )}
            </div>
            <button type="submit" className={styles.button}>
              <FormattedMessage id="popup.sendButton" />
            </button>
          </form>
          <button className={styles.closeButton} onClick={closePopup}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
