import React from "react";
import "../../style/Contact.css";
import contact from "../img/contact-hero.png";

const Contact = () => {
  return (
    <>
      <div className='contact-content-container'>
        <div className='contact-copy-container'>
          <div className='contact-header'>Get In Touch</div>
          <div className='contact-subhead'>
            Our team of engineers may like plants, but they love to
            problem-solve. Looking to build amazing user interfaces with a
            collaborative and accountable team? Just send us an email and we'll
            be in touch.
          </div>
          {/* comment */}
          <a
            href='mailto:plantarriumprogramming@gmail.com'
            style={{ textDecoration: "none" }}
          >
            <button className='contact-button'>Let's Connect</button>
          </a>
        </div>

        <img
          className='contact-img'
          src={contact}
          alt='code-on-desk-front-of-plants'
        />
      </div>
    </>
  );
};

export default Contact;
