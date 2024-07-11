import React, { useEffect } from 'react';
import Link from 'next/link';

function MainNavbar({ lightMode, mainBg, subBg, noStatic, curve }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }



  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }



  return (
    <nav className={`navbar navbar-expand-lg ${curve ? 'nav-crev' : ''} ${noStatic ? '' : 'static'} ${mainBg ? 'main-bg' : ''} ${subBg ? 'sub-bg' : ''}`}>
      <div className="container">
        <Link className="logo icon-img-100" href="/">
          {
            lightMode ?(
              <img src="/dark/assets/imgs/logo-dark.png" alt="logo" />
            ):(
              <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          )}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item " >
              <Link className="nav-link " data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item " >
              <Link className="nav-link " data-toggle="dropdown" href={`/${lightMode ? 'light' : 'light'}/page-about`} role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item " >
              <Link className="nav-link " data-toggle="dropdown" href={`/${lightMode ? 'light' : 'light'}/page-services`} role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
          
         
         
            <li className="nav-item " >
              <Link className="nav-link " data-toggle="dropdown" href={`/${lightMode ? 'light' : 'light'}/portfolio-grid-2`} role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item " >
              <Link className="nav-link " data-toggle="dropdown" href="https://blog.apexnile.com" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Blog</span>
              </Link>
            </li>
        
          </ul>
        </div>

        <div className="navbar-nav">
        <li className="nav-item">
              <Link className="nav-link" href={`/${lightMode ? 'light' : 'light'}/page-contact`}><span className="rolling-text">Contact</span></Link>
            </li>
        </div>
        <div className="navbar-nav">
        <li className="nav-item">
              <Link className="nav-link" href="https://careers.apexnile.com"><span className="rolling-text">careers</span></Link>
            </li>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar