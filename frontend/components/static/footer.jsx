import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="contact-info">
      <h2>Contact</h2>
      <p>Open: Wed – Sun, 12pm – 5pm</p>
      <p>Reservations? Questions? Call us at (650) 558-8515</p>
      <p>Or visit us in person at 1223 Donnelly Ave, Burlingame, CA 94010</p>
    </div>
    <div className="my-links">
      <div id="created-by">Inspired by Leland Tea, created by Disnee</div>
      <div className="link-icons">
        <a href="https://linkedin.com/in/disneetamang"><img className="link-icon" src="images/linkedinicon.png" /></a>
        <a href="https://github.com/d-tamang"><img className="link-icon" src="images/githubicon.png" /></a>
        <a href="mailto: d.tamang48@yahoo.com"><img className="link-icon" src="images/mailicon.png"/></a>
      </div>
    </div>
  </div>
);

export default Footer;