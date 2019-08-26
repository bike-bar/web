import React from 'react'

import Instagram from '../../icons/instagram'
import Facebook from '../../icons/facebook'

const Footer = () => {
  const year = new Date().getFullYear()

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
          <div className="footer__icons">
            <a
              href="https://www.instagram.com/thebicyclebar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/TheBicycleBar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
          <p className="footer__copyright">© {year} The Bicycle Bar</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
