import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './Faq.module.scss';
import Accordion from './Accordion.js';

const Faq = () => {
  const [data, setData] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
    { id: 4, isOpen: false },
    { id: 5, isOpen: false },
  ]);

  const toggleAccordion = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });

    setData(updatedData);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.faq__title}>
          <FormattedMessage id="faq.title" />
        </h2>
        <div className={styles.faq__block}>
          {data.map((val) => (
            <Accordion
              key={val.id}
              questionId={`question.${val.id}`}
              answerId={`answer.${val.id}`}
              isOpen={val.isOpen}
              toggleAccordion={() => toggleAccordion(val.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
