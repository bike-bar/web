import React from 'react'

import Instagram from '../../icons/instagram'
import Facebook from '../../icons/facebook'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container__inner">
        <div className="footer__top">
          <div className="footer__content">map data</div>
          <div className="footer__content">
            <p className="footer__header">Hours</p>
            <div className="footer__content-row">
              <p>Monday</p>
              <p>6-10pm</p>
            </div>
            <div className="footer__content-row">
              <p>Tueday-Thursday</p>
              <p>5-10pm</p>
            </div>
            <div className="footer__content-row">
              <p>Friday and Saturday</p>
              <p>5pm-12am</p>
            </div>
          </div>
          <div className="footer__content">
            <p className="footer__header">Contact</p>
            <div className="footer__content-row">
              <a href="mailto:info@bicyclebar.com">info@thebicyclebar.com</a>
              <a href="tel:423-790-9277">(423) 475-6569</a>
              <p>45 E Main St, Chattanooga, TN 37408</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__content">
            <div className="footer__content-row">
              <div className="footer__icons">
                {/* TODO: apply spacing similar to justify-content: space-around */}
                <Instagram />
                <Facebook />
              </div>
            </div>
          </div>
          <div className="footer__content">
            <div className="footer__content-row">
              <p className="footer__copyright">© 2020 The Bicycle Bar</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
