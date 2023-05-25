import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './Popup.module.scss';
import { AiOutlineClose } from 'react-icons/ai';


const Popup = ({ hide }) => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

 

  const closePopup = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    hide(false);
  };

  const intl = useIntl();

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
          <form className={styles.form}>
            <input
              type="text"
              className={styles.input}
              placeholder={intl.formatMessage({
                id: 'popup.namePlaceholder',
              })}
            />
            <input
              type="tel"
              className={styles.input}
              placeholder={intl.formatMessage({
                id: 'popup.telPlaceholder',
              })}
              pattern="[0-9]*"
            />
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
