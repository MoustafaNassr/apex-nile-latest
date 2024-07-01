import React, { useEffect, useState } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/HomeMain/Header';
import About from '@/components/HomeMain/About';
import Marq from '@/components/HomeMain/Marq';
import Clients from '@/components/HomeMain/Clients';
import Services from '@/components/HomeMain/Services';
import Works from '@/components/HomeMain/Works';
import ServicesTabs from '@/components/HomeMain/ServicesTabs';
import Testimonials from '@/components/HomeMain/Testimonials';
import Blog from '@/components/HomeMain/Blog';
import Footer from '@/components/HomeMain/Footer';

function HomeMainLight() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      const prefersDarkMode = e.matches;
      setIsLightMode(!prefersDarkMode);
      updateBodyClass(prefersDarkMode);
    };

    const updateBodyClass = (prefersDarkMode) => {
      document.body.classList.add('home-main-crev', 'main-bg');
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

    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true)
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    // Horizontal Scroll
    if (window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
        }
      });
    }

    // Footer Animation
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }

    return () => {
      document.body.classList.remove('home-main-crev', 'main-bg', 'dark-mode', 'light-mode');
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <Layout lightMode={isLightMode}>
            <Head>
        <title>ApexNile - Home</title>
        <meta name="description" content="Welcome to ApexNile, your partner in digital transformation. Discover our services in web and mobile application development, UI/UX design, and brand identity. Learn more about our projects and client successes." />
        <meta name="keywords" content="ApexNile, digital transformation, web development, mobile application development, UI/UX design, brand identity, software solutions" />
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic lightMode={isLightMode} />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <About />
            <Marq />
            <Clients lightMode={isLightMode} />
            <Services lightMode={isLightMode} />
            <Works />
            <ServicesTabs lightMode={isLightMode} />
            <Testimonials lightMode={isLightMode} />
            <Blog />
          </main>
          <Footer lightMode={isLightMode} />
        </div>
      </div>
    </Layout>
  );
}

export default HomeMainLight;
