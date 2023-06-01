import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18nProvider';
import messages from './i18nProvider/messages/index';
import Header from './cotainers/Header/Header';
import Home from './pages/Home';
import Buy from './pages/Buy';
import ApartmentCategory from './pages/ApartmentCategory';
import Blog from './pages/Blog';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Footer from './cotainers/Footer/Footer';
import './scss/main.scss';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <React.Fragment>
        <Header onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/apartment-category" element={<ApartmentCategory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </IntlProvider>
  );
};

export default App;
