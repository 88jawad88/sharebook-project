import React from "react";

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <section className="section-contant">
          <div className="container">
            <h2 className="contact-us">Contact Us</h2>
            <form className="contact-form">
              <div className="dialer-info">
                <div className="dialer-name">
                  <label htmlFor="name">name</label>
                  <input id="name" type="text" placeholder="Enter Your Name" />
                </div>
                <div className="dialer-email">
                  <label htmlFor="email">email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="dialer-message">
                <textarea
                  id="message"
                  type="Text"
                  cols="40"
                  rows="5"
                  placeholder="Leave Your Message Here"
                ></textarea>
                <button className="send-btn">Send</button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
export default ContactPage;
