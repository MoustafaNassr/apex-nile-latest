import React from 'react';
import Link from 'next/link';

function ServicesTab({ lightMode }) {
  function openTab(event) {
    document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
    const tabId = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
  }

  return (
    <section className="services-tab section-padding">
      <div className="container">
        <div className="row" id="tabs">
          <div className="col-lg-6 order2">
            <div className="serv-tab-cont mb-80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/4.svg`} alt="UI/UX Design" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/serv-icons/01-dark.svg`} alt="UI/UX Design" />
                    </div>
                    <div className="text">
                      <p>Delivering intuitive UX/UI designs for websites and apps that enhance user experience and engagement.</p>
                    </div>
             
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/2.svg`} alt="Branding" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/serv-icons/01-dark.svg`} alt="Branding" />
                    </div>
                    <div className="text">
                      <p>Crafting distinctive brand identities and compelling designs to elevate your brand's presence and recognition.</p>
                    </div>
               
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/3.svg`} alt="Development" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/serv-icons/02-dark.svg`} alt="Development" />
                    </div>
                    <div className="text">
                      <p>Implementing robust web and mobile application development to turn your ideas into digital realities.</p>
                    </div>
               
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/sass-img/serv/1.svg`} alt="Marketing" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'dark' : 'dark'}/assets/imgs/serv-icons/03-dark.svg`} alt="Marketing" />
                    </div>
                    <div className="text">
                      <p>Implementing strategic digital marketing, content creation, and SEO to boost your online visibility and traffic.</p>
                    </div>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign order1">
            <div className="serv-tab-link tab-links full-width md-mb50">
              <div className="sec-lg-head mb-80">
                <h6 className="dot-titl-non mb-15">Services</h6>
                <p>We help you to go online and increase your conversion rate with better design for your digital products.</p>
              </div>
              <ul className="rest">
                <li className="item-link current mb-15" data-tab="tabs-1" onClick={openTab}><span>01</span> UI/UX Design</li>
                <li className="item-link mb-15" data-tab="tabs-2" onClick={openTab}><span>02</span> Branding</li>
                <li className="item-link mb-15" data-tab="tabs-3" onClick={openTab}><span>03</span> Development</li>
                <li className="item-link" data-tab="tabs-4" onClick={openTab}><span>04</span> Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesTab;
