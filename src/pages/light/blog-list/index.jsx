import React, { useEffect, useState } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Blog/Header';
import List from '@/components/InnerPages/Blog/List';
import Footer from '@/components/Startup/Footer';

function BlogListLight() {
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
    subTitle: "OUR BLOG",
    title: "Latest News."
  };

  return (
    <Layout lightMode={isLightMode}>
      <Head>
        <title>ApexNile - Blog List</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode={isLightMode} />
      <main className="main-bg">
        <Header data={metadata} />
        <List />
      </main>
      <Footer lightMode={isLightMode} />
    </Layout>
  );
}

export default BlogListLight;
