import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../components/PageHeader';
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState(null); // Message for the popup

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hfq09je', 'template_ioqg0ym', form.current, '0ojlHm0qRkC3NUfJa')
      .then(
        () => {
          setPopupMessage('Message sent successfully!'); // Success message
        },
        (error) => {
          console.log('FAILED...', error.text);
          setPopupMessage('Failed to send message. Please try again.'); // Error message
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="user_name"
                  className="inputName"
                  type="text"
                />
                <label htmlFor="user_name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type="email"
                />
                <label htmlFor="user_email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="message" className="descriptionLabel">
                  Message
                </label>
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
        </Animate>

        {/* Popup message */}
        {popupMessage && (
          <div className="popup">
            {popupMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
