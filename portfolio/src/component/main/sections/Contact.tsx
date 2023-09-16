import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <p>
          Have a question or an exciting project in mind? Reach out and let's
          make something amazing together!
        </p>
      </div>
      <div className="contact-form">
        <form className="form-main">
        <div className="form-top">
          <div className="contact-form-name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />
          </div>
          <div className="contact-form-email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
            />
          </div>
        </div>
        <div className="form-bottom">
          <div className="contact-form-message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Share your thoughts.."
            />
          </div>
        </div>
        <div className="contact-form-submit">
          <input type="submit" value="Send Message" />
        </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
