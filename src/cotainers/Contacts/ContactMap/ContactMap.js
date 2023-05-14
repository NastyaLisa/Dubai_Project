import React from 'react';
import styles from './ContactMap.module.scss';

const ContactMapForm = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.contact__title}>Contacts</h2>
        <address className={styles.contact__address}>
          <ul className={styles.contact__items}>
            <li className={`${styles.contact__item} ${styles.city}`}>Dubai, <span className={styles.country}>UAE</span></li>

            <li className={styles.contact__item}>
              <span className={styles.detail}>
              269 King Str, 05th Floor, Utral Hosue Building,
      Dubai, VIC 3000, UAE.
              </span>
     
            </li>

            <li className={`${styles.contact__item} ${styles.phone}`}>
              <a href="tel:+99 (0) 344 956 4050">
        +99 (0) 344 956 4050
              </a>
            </li>

            <li className={styles.contact__item}>
              <a href="mailto:info@sparch.co">
        Email: <span className={styles.detail}>info@sparch.co</span>  
              </a>
            </li>

            <li className={`${styles.contact__item} ${styles.detail__}`}>Follow us: SOCIALS
            </li>

            <li className={styles.contact__item}>Work Hours: <span className={styles.detail}>Monday - Friday : 08h00 - 17h30</span>
            </li>
          </ul>
        </address>
        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d112341.2371618447!2d55.15579948055373!3d25.083781147698247!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2ssg!4v1684069920709!5m2!1sru!2ssg"
            // width="800" height="600" 
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        

      </div>
    </section>

  );
};
export default ContactMapForm;



