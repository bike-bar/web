import React from 'react'

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
              <p>info@thebicyclebar.com</p>
              <p>(423) 475-6569</p>
              <p>45 E Main St, Chattanooga, TN 37408</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__social">social</div>
          <div className="footer__copyright">copyright</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
