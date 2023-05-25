import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Popup from '../Popup/Popup';
import  './Button.scss';

const Button = ({ navbarOpen, className }) => {
  const [showPopup, setShowPopup] = useState(false);

  const hidePopup = (state) => {
    setShowPopup(state);
  };

  useEffect(() => {
    if (showPopup === true) {
      document.body.classList.add('bodyNoScroll');
    } else {
      document.body.classList.remove('bodyNoScroll');
    }
  }, [showPopup]);
  const close = 'button';
  const open = 'button button__open';

  return (
    <div >
      <button
        type="button"
        className={`${navbarOpen ? open : close} ${className}`}
        onClick={() => setShowPopup(true)}
      >
        <FormattedMessage id="button.consultation" />
      </button>

      {showPopup && <Popup hide={hidePopup} />}
    </div>
  );
};

export default Button;
