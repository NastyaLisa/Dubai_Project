import React, { useState } from 'react';
import styles from './Faq.module.scss';
import Data from './Data';
import Accordion from './Accordion.js';

const Faq = () => {
  const [data] = useState(Data);
  // const [data, setData] = useState(Data);
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.faq__title}>FAQ</h2>
        <div className={styles.faq__block}>
          {data.map((val) => {
            return (
              <>
                <Accordion key={val.id} {...val} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Faq;
