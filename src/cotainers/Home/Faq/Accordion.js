import React from 'react';
import { FormattedMessage } from 'react-intl';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from './Faq.module.scss';

const Accordion = ({ questionId, answerId, isOpen, toggleAccordion }) => {
  return (
    <div className={styles.faq__block__item}>
      <div className={styles.faq__question} onClick={toggleAccordion}>
        <h3>
          <FormattedMessage id={questionId} />
        </h3>
        <p>
          {isOpen ? (
            <AiOutlineDown className={styles.icon} />
          ) : (
            <AiOutlineRight className={styles.icon} />
          )}
        </p>
      </div>
      {isOpen && (
        <div className={styles.faq__answers}>
          <p>
            <FormattedMessage id={answerId} />
          </p>
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  questionId: PropTypes.string.isRequired,
  answerId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};

export default Accordion;
