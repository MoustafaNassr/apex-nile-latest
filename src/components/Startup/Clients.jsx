import React from 'react';
//= Data
import data from '@/data/Startup/clients.json';
import appData from '@/data/app-data.json';
import Split from '../Common/Split';

function Clients({ lightMode }) {
  return (
    <div className="clients section-padding pb-100 position-re">
      <div className="container">
        <div className="row justify-content-center mb-80">
          <div className="col-lg-6 text-center">
            <h6><span className="fz-14">06 . </span> Clients</h6>
            <div className="text">
              <h3>We create <span className="sub-font">experiences</span> and turn ideas into reality.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {
                data.map((item) => (
                  <div className="col-md-4 col-6 brand box-bg" key={Math.floor(Math.random() * 10000)}>
                    <div className="item mb-30 wow fadeIn" data-wow-delay=".6s">
                      <div className="img">
                        <img src={`/${lightMode ? 'light' : 'dark'}${item}`} alt="" />
                      </div>
                      <Split tag="a" href={appData.author_link} className="link">
                        www.ApexNile.com
                      </Split>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern patrn1 bg-img opacity-5" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/pattern.svg`}></div>
    </div>
  )
}

export default Clients