import React from 'react';
import BuyHero from '../cotainers/Buy/BuyHero/BuyHero';
import BuyDescription from '../cotainers/Buy/BuyDescription/BuyDescription';
import BuyMethods from '../cotainers/Buy/BuyMethods/BuyMethods';
import Features from '../cotainers/Buy/Features/Features';
import BuyArticles from '../cotainers/Buy/BuyArticles/BuyArticles';
import FormInner from '../components/Form/FormInner';
import BuyGrid from '../cotainers/Buy/BuyGrid/BuyGrid';
import BuyServices from '../cotainers/Buy/BuyServices/BuyServices';

const Buy = () => {
  return(
    <main className="section">
      <BuyHero/>
      <BuyDescription/>
      <BuyMethods/>
      <Features/>
      <BuyArticles/>
      <FormInner/>
      <BuyGrid/>
      <BuyServices/>
    </main>
  );
};

export default Buy;