import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/sq1.jpg"></div>
          </div>
          <div className="col-lg-8">
            <div className="bg-img radius-10" data-background="/dark/assets/imgs/about/sq2.jpg"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title arrow">Our Story.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
            <h4>ApexNile specializes in software development, offering comprehensive web and mobile application solutions along with top-notch UI/UX and brand design services. Our team partners with clients to create innovative and engaging digital experiences that enhance brand identity and user interaction.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story