import React, { useEffect, useState } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Header';
import Story from '@/components/InnerPages/About/Story';
import Services from '@/components/InnerPages/About/Services';
import Intro from '@/components/InnerPages/About/Intro';
import Testimonials from '@/components/DigitalAgency/Testimonials';
import Team from '@/components/Startup/Team';
import Clients from '@/components/InnerPages/About/Clients';
import CallToAction from '@/components/Startup/CallToAction';
import Footer from '@/components/Startup/Footer';

function PageAboutLight() {
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

  const headerMetadata = {
    subTitle: "WHO WE ARE ?",
    title: "We're a digital agency based in UAE.",
    text: "About Us"
    
  };

  return (
    <Layout lightMode={isLightMode}>
       <Head>
        <title>ApexNile - About Us</title>
        <meta name="description" content="Learn more about ApexNile, a leading software company based in the UAE, specializing in web and mobile application development, UI/UX design, and brand identity services. Discover our story, services, and commitment to driving digital transformation." />
        <meta name="keywords" content="ApexNile, software company, web development, mobile application development, UI/UX design, brand identity, digital transformation, UAE" />
      </Head>

      <Loader />
      <Navbar mainBg noStatic lightMode={isLightMode} />
      <main>
        <Header data={headerMetadata} />
        <Story />
        <Services lightMode={isLightMode} />
        <Intro />
        <Testimonials mainColor />
        <CallToAction innerPageStyle />
      </main>
      <Footer lightMode={isLightMode} />
    </Layout>
  );
}

export default PageAboutLight;
