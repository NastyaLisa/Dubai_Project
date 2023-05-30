import React from 'react';

import styles from './BuyGrid.module.scss';

const BuyGrid = () => {
  return (
    <section className={styles.grid}>
      <div className={styles.container}>
        <div className={styles.grid__container}>
          
          <div className={styles.grid__header}>
            <div className={`${styles.grid__header__text} ${styles.column_first}`}>Included in the package</div>
            <div className={styles.grid__header__text}>Complete management</div>
            <div className={styles.grid__header__text}>Partial control</div>
          </div>

          {/* <!-- Заполненная первая колонка для всех строк --> */}
          <div className={`${styles.grid__cell__first} `}>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>
              Real estate advertising
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__even}`}>
              Search for tenants
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>
              Conclusion of a lease agreement
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__even}`}>Getting paid
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>Key handover
            </div>
 
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__even}`}>Payment processing
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>Dealing with repair requests
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__even}`}>DEWA connection (electricity/water)
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>Registration of the rental agreement Ejari
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__even}`}>Separate administrator
            </div>

            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>Detailed inspection of the object
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__even}`}>Property preparation before arrival
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>Reporting</div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__even}`}>Repair Request Management
            </div>
            <div className={`${styles.cell} ${styles.cell__text} ${styles.cell__odd}`}>Repair management</div>
          </div>
          
          {/* <!-- Вторая колонка без последних 5 строк --> */}
          <div className={`${styles.grid__cell__second} `}>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}></div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}></div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}></div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}></div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}></div>
          </div>

          {/* <!-- Третья колонка со всеми строками --> */}     
          <div className={`${styles.grid__cell__third} `}>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__even}`}>✓</div>
            <div className={`${styles.cell} ${styles.cell__mark} ${styles.cell__odd}`}>✓</div>
          </div>

      
        </div>
       
      </div>
    </section>
  );
};
export default BuyGrid;
