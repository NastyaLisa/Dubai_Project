import React from 'react';

import image1 from 'images/home/expertise_1.webp';
import image2 from 'images/home/expertise_2.webp';

import styles from './Examples.module.scss';

const Examples = ()=>{

 
  
  return(
    <section className={styles.examples}>
      <div className={styles.container}>
        <div className={styles.container__col}>
          <img src={image1} alt=""/>
          <p className={styles.text}>
          Sed in&nbsp;sem pellentesque, eleifend erat vitae, tincidunt turpis. 
Pellentesque augue elit, rutrum sit amet commodo vel, 
porta quis purus. Nullam faucibus, odio eu&nbsp;bibendum auctor, 
eros dolor aliquet purus, sit amet pellentesque neque est id&nbsp;tortor. 
In&nbsp;egestas, erat a&nbsp;dapibus dapibus, mi&nbsp;augue ornare lorem, 
nec pretium ligula purus nec tellus. Aenean a&nbsp;scelerisque nisi. 
Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. 
Nullam mattis justo consequat risus. Donec imperdiet enim id&nbsp;efficitur pharetra. 
Nam sollicitudin at&nbsp;est eget auctor. Ut&nbsp;sed ante quis nulla tincidunt 
auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. 
Pellentesque 
elementum purus non nisl pharetra consequat. Nunc in&nbsp;venenatis orci.
          </p>
        </div>
        <div className={styles.container__col}>
          <img src={image2} alt=""/>
          <p className={styles.text}>
          Vivamus non diam vel lorem efficitur mattis in&nbsp;gravida ante. Ut&nbsp;ullamcorper dapibus ante, 
eu&nbsp;tincidunt orci feugiat vel. Curabitur eget lectus lectus. Pellentesque malesuada, 
felis at&nbsp;accumsan interdum, nisl mi&nbsp;fermentum est, eu&nbsp;suscipit dui lorem a&nbsp;dui. 
Aliquam rhoncus risus in&nbsp;leo vestibulum efficitur. Suspendisse tortor quam, faucibus a&nbsp;lacinia&nbsp;a, 
bibendum vitae quam. Suspen disse et&nbsp;metus et&nbsp;orci rutrum dictum eu&nbsp;eu&nbsp;nibh. 
Suspendisse blandit in&nbsp;diam in&nbsp;rhoncus. Nam volutpat hendrerit enim, sed aliquet quam gravida&nbsp;at. 
Nullam dictum sagittis nisi, eu&nbsp;porta sem mollis&nbsp;eu. Nulla faucibus sed ipsum sed sodales. 
Curabitur varius iaculis felis, in&nbsp;aliquet sem suscipit quis. Ut&nbsp;vulputate, 
magna ac&nbsp;bibendum elementum, nulla magna tincidunt urna, a&nbsp;venenatis dolor arcu sed leo.
          </p>
        </div>
      </div>
    </section>

  );
};
export default Examples;


      
