import React from "react";

import NetlifyForm from "react-netlify-form";

const Contact = () => {
  return (
    <>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Contact Me</h2>
            <span>Contact Me</span>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>

                <NetlifyForm name="Contact Form">
                  {({ loading, error, success }) => (
                    <div>
                      {loading && <div>Loading...</div>}
                      {error && (
                        <div>
                          Your information was not sent. Please try again later.
                        </div>
                      )}
                      {success && <div>Thank you for contacting us!</div>}
                      {!loading && !success && (
                        <div>
                          {/* <form id="mi-contactform" name="contact" netlify netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" /> */}
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-name">
                              Enter your name*
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="contact-form-name"
                            />
                          </div>
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-email">
                              Enter your email*
                            </label>
                            <input
                              type="text"
                              name="email"
                              id="contact-form-email"
                            />
                          </div>
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-subject">
                              Enter your subject*
                            </label>
                            <input
                              type="text"
                              name="subject"
                              id="contact-form-subject"
                            />
                          </div>
                          <div className="mi-form-field">
                            <label htmlFor="contact-form-message">
                              Enter your Message*
                            </label>
                            <textarea
                              name="message"
                              id="contact-form-message"
                              cols={30}
                              rows={6}
                            />
                          </div>

                          <div className="mi-form-field">
                            <button className="mi-button" type="submit">
                              Send Mail
                            </button>
                          </div>
                          {/* </form> */}
                        </div>
                      )}
                    </div>
                  )}
                </NetlifyForm>

                <div className="form-message alert" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <img
                      src="assets/images/icons/phone.svg"
                      alt="phone"
                      className="mi-svgimage"
                    />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Phone</h6>
                    <p>
                      <a href="%2b012-3456-7891.html">+8801829738891</a>
                    </p>
                    {/* <p>
                      <a href="%2b012-3456-7892.html">+8801605079938</a>
                    </p> */}
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <img
                      src="assets/images/icons/mail.svg"
                      alt="mail"
                      className="mi-svgimage"
                    />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Email</h6>
                    <p>
                      <a href="mailto:jahidul.saeid@gmail.com">
                        jahidul.saeid@gmail.com
                      </a>
                    </p>
                    {/* <p>
                      <a href="mailto:info.sitename@example.com">
                        info.sitename@example.com
                      </a>
                    </p> */}
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <img
                      src="assets/images/icons/map-pin.svg"
                      alt="map"
                      className="mi-svgimage"
                    />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Address</h6>
                    <p>
                      Dhaka Housing, North Adabor, Mohammadpur, Dhaka,
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
