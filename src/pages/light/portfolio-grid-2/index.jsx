import React, { useEffect, useState } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Startup/Footer';
import Header from '@/components/Portfolio/Header';
import GridTwoCols from '@/components/Portfolio/ClassicGrid/2Col';

function PortfolioClassicGrid2Light() {
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

  const metadata = {
    subTitle: "Our Works",
    title: "Check our AWSOME portfolio"
  };

  return (
    <Layout lightMode={isLightMode}>
      <Head>
        <title>ApexNile - Portfolio</title>
        <meta name="description" content="Discover ApexNile's comprehensive range of services, including web and mobile application development, UI/UX design, and brand identity solutions. Empower your digital transformation with our expert team." />
        <meta name="keywords" content="ApexNile, web development, mobile application development, UI/UX design, brand identity, software solutions, digital transformation" />
      </Head>

      <Loader />
      <Navbar mainBg lightMode={isLightMode} />
      <main>
        <Header data={metadata} />
        <GridTwoCols />
      </main>
      <Footer subBg lightMode={isLightMode} />
    </Layout>
  );
}

export default PortfolioClassicGrid2Light;
