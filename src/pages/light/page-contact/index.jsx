import React, { useEffect, useState } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Contact/Header';
import Form from '@/components/InnerPages/Contact/Form';
import Footer from '@/components/Freelancer/Footer';

function PageContactLight() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      const prefersDarkMode = e.matches;
      setIsLightMode(!prefersDarkMode);
      updateBodyClass(prefersDarkMode);
    };

    const updateBodyClass = (prefersDarkMode) => {
      document.body.classList.add('main-bg');
      if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    };

    handleChange(mediaQuery); // Set the initial mode based on the current system preference
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      document.body.classList.remove('main-bg', 'dark-mode', 'light-mode');
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <Layout lightMode={isLightMode}>
      <Head>
        <title>ApexNile - Contact Us</title>
        <meta name="description" content="Discover ApexNile's comprehensive range of services, including web and mobile application development, UI/UX design, and brand identity solutions. Empower your digital transformation with our expert team." />
        <meta name="keywords" content="ApexNile, web development, mobile application development, UI/UX design, brand identity, software solutions, digital transformation" />
      </Head>

      <Loader />
      <Navbar mainBg lightMode={isLightMode} />
      <main>
        <Header />
        <Form />
      </main>
      <Footer lightMode={isLightMode} />
    </Layout>
  );
}

export default PageContactLight;
