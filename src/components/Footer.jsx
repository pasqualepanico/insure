import React from "react";
import LongLine from "./LongLine";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const urlFacebook = "https://it-it.facebook.com/";
  const urlTwitter = "https://twitter.com/?lang=it";
  const urlPinterest = "https://www.pinterest.it/";
  const urlInstagram = "https://www.instagram.com/";

  return (
    <div className="container">
      <img className="logo-bottom" src="logo.svg" alt="logo" />
      <div className="for-a-style">
        <a className="a-style" href={urlFacebook}>
          <FacebookIcon className="style-icon-over" color="action" />
        </a>
        <a className="a-style" href={urlTwitter}>
          <TwitterIcon className="style-icon-over" color="action" />
        </a>
        <a className="a-style" href={urlPinterest}>
          <PinterestIcon className="style-icon-over" color="action" />
        </a>
        <a className="a-style" href={urlInstagram}>
          <InstagramIcon className="style-icon-over" color="action" />
        </a>
      </div>
      <LongLine />
      <div className="grid-container">
        <div className="grid-item">
          <h3>OUR COMPANY</h3>
          <p>HOW WE WORK</p>
          <p>WHY INSURE?</p>
          <p>VIEW PLANS</p>
          <p>REVIEWS</p>
        </div>
        <div className="grid-item">
          <h3>HELP ME</h3>
          <p>FAQ</p>
          <p>TERMS OF USE</p>
          <p>PRIVACY POLICY</p>
          <p>COOKIES</p>
        </div>
        <div className="grid-item">
          <h3>CONTACT</h3>
          <p>SALES</p>
          <p>SUPPORT</p>
          <p>LIVE CHAT</p>
        </div>
        <div className="grid-item">
          <h3>OTHERS</h3>
          <p>CAREERS</p>
          <p>PRESS</p>
          <p>LICENSES</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
