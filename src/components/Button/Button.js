import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './Button.module.scss';

const Button =({nav})=>{
  const close =`${styles.btn}`;
  const open =`${styles.btn} ${styles.btn__open} `;
  return (
    <button type="button" className={nav ? open : close}>
      <FormattedMessage id="button.consultation" />
    </button>
  );
};

export default Button;


//POP-UP
// import React, { useState } from 'react';
// import ConsultationForm from './ConsultationForm'; // Компонент с формой для записи на консультацию

// const BookConsultationButton = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleButtonClick = () => {
//     setShowPopup(true);
//   }

//   return (
//     <>
//       <button onClick={handleButtonClick}>Book a consultation</button>
//       {showPopup && <ConsultationForm />}
//     </>
//   );
// };

// export default BookConsultationButton;
