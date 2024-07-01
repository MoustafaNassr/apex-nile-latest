import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function ServicesTabs({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openTab(event) {
    document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
    const tabId = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
  }

  return (
    <section className="services-tab revers section-padding pt-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-12">
            <div className="full-width">
              <div className="main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom">
              <div className="slide-har st1">
  <div className="box">
    <div className="item">
      <h4 className="d-flex align-items-center fz-70 "><span>Cutting-Edge Web Solutions</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span className='stroke'>Innovative Mobile Apps</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span>Effective Digital Marketing</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span className='stroke'>Creative Design Services</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span>Comprehensive IT Solutions</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
  </div>
  <div className="box">
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span className='stroke'>Seamless Integration</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span>Innovative Mobile Apps</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span  className='stroke'>Effective Digital Marketing</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span className='stroke'>Creative Design Services</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
    <div className="item">
      <h4 className="d-flex align-items-center fz-70"><span>Cutting-Edge Web Solutions</span>
        <span className="fz-50 ml-50 stroke icon">*</span>
      </h4>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" id="tabs">
          <div className="col-lg-5 valign">
            <div className="serv-tab-link tab-links full-width md-mb50">
              <div className="sec-lg-head mb-80 wow fadeIn">
                <h6 className="dot-titl-non mb-15">Services</h6>
                <p>We help you to go online and increase your conversion rate Better design for your digital products. </p>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <ul className="rest">
                    <li className="item-link current mb-15 pb-15 bord-thin-bottom" data-tab="tabs-1" onClick={openTab}><span>01</span> UI/UX Design</li>
                    <li className="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-2" onClick={openTab}><span>02</span> Branding</li>
                    <li className="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-3" onClick={openTab}><span>03</span> Development</li>
                    <li className="item-link" data-tab="tabs-4" onClick={openTab}><span>04</span> Marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
  <div className="serv-tab-cont">
    <div className="tab-content current" id="tabs-1">
      <div className="item">
        <div className="img">
          <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/4.svg`} alt="UI/UX Design" />
        </div>
        <div className="cont sub-bg">
          <div className="icon-img-60 mb-40">
            <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/01-dark.svg`} alt="UI/UX Icon" />
          </div>
          <div className="text">
            <p>Enhance user engagement with our top-notch UI/UX design services. We create intuitive and visually appealing interfaces that delight users and drive conversions.</p>
          </div>
          <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30">
            <span className="mr-15 ">Read More</span>
            <i className="fas fa-long-arrow-alt-right arrow "></i>
          </Link>
          <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/abstact-BG.png`}></div>
        </div>
      </div>
    </div>
    <div className="tab-content" id="tabs-2">
      <div className="item">
        <div className="img">
          <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/2.svg`} alt="Branding Services" />
        </div>
        <div className="cont sub-bg">
          <div className="icon-img-60 mb-40">
            <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/serv-icons/02-dark.svg`} alt="Branding Icon" />
          </div>
          <div className="text">
            <p>Build a powerful brand identity with our comprehensive branding services. From logos to complete brand strategies, we help you stand out in the market.</p>
          </div>
          <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30">
            <span className="mr-15">Read More</span>
            <i className="fas fa-long-arrow-alt-right arrow"></i>
          </Link>
        </div>
      </div>
    </div>
    <div className="tab-content" id="tabs-3">
      <div className="item">
        <div className="img">
          <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/3.svg`} alt="Web Development" />
        </div>
        <div className="cont sub-bg">
          <div className="icon-img-60 mb-40">
            <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/serv-icons/05-dark.svg`} alt="Development Icon" />
          </div>
          <div className="text">
            <p>Transform your ideas into reality with our expert web development services. We build robust, scalable websites and applications tailored to your business needs.</p>
          </div>
          <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30">
            <span className="mr-15">Read More</span>
            <i className="fas fa-long-arrow-alt-right arrow"></i>
          </Link>
        </div>
      </div>
    </div>
    <div className="tab-content" id="tabs-4">
      <div className="item">
        <div className="img">
        <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/1.svg`} alt="marketing" />
        </div>
        <div className="cont sub-bg">
          <div className="icon-img-60 mb-40">
            <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/serv-icons/04-dark.svg`} alt="Strategic Planning Icon" />
          </div>
          <div className="text">
            <p>Achieve your business goals with our strategic planning services. We provide actionable insights and strategies to help you navigate the digital landscape successfully.</p>
          </div>
          <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30 ">
            <span className="mr-15 ">Read More</span>
            <i className="fas fa-long-arrow-alt-right arrow "></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  )
}

export default ServicesTabs