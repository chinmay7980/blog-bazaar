import "./page.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "blogBazaar25@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "1234567891",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "NH44, Chowk, Bahalgarh, Sonipat, Kishora, Haryana 131001",
      description: "Schedule an appointment",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 9AM - 6PM",
      description: "Weekend: By appointment",
    },
  ];

  return (
    <div className="contact-box">
      <Navbar />

      <section className="hero_section">
        <div className="container">
          <h1 className="hero_title">Get in Touch</h1>
          <p className="hero_paragraph">
            Have a question, suggestion, or just want to say hello? We d love to
            hear from you!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="form-card">
              <h2 className="form-title">Send us a Message</h2>
              <form className="form-space">
                <div className="form-row">
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" required />
                  </div>

                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" required />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            <section className="contact-information">
              <h2 className="info-title">Contact Information</h2>

              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="icon-box">
                      <div className="icon-circle">
                        <info.icon className="icon" />
                      </div>
                    </div>
                    <div>
                      <h3 className="item-title">{info.title}</h3>
                      <p className="item-content">{info.content}</p>
                      <p className="item-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
