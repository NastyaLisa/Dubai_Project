import React from 'react';
import ApartmentHero from '../cotainers/ApartmentCategory/ApartmentHero/ApartmentHero';
import  AllApartments from '../cotainers/ApartmentCategory/AllApartments/AllApartments';
import BestOffers from '../cotainers/ApartmentCategory/BestOffers/BestOffers';
import Description from '../cotainers/ApartmentCategory/Description/Description';
import FormInner from '../components/Form/FormInner';

const ApartmentCategory = () => {
  return(
    <>
      <h1>ApartamentCategory</h1>

      <ApartmentHero />
      <AllApartments/>
      <BestOffers/>
      <Description/>
      <FormInner/>
    </>
    
  );
};

export default ApartmentCategory;