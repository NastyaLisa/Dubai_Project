import React, {useState} from 'react';
import {AiOutlineDown, AiOutlineRight} from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from './Faq.module.scss';

const Accordion = ({question, answer}) =>{
  const [text, setText]=useState(false);
  const display = ()=>{ setText(!text);};
  return (
    <>
      <div className={styles.faq__block__item}> 
        <div className={styles.faq__question}>
          <h3>
            {question}
          </h3>
          <p onClick={display}>
            
            {text? <AiOutlineDown className={styles.icon}/>:<AiOutlineRight className={styles.icon}/>}
            
          </p>
        </div>

        <div className={styles.faq__answers}>
          {text && <p> {answer}</p>}
        </div>
      </div>
    </>
  );
};

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Accordion;