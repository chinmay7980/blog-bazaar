import './page.css';

export default function ContactPage() {
  return (
    <div className="contact-box">
      <h1>CONTACT US</h1>
      <br />
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Your name" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Your email" />
        <br />
        <label>Message:</label>
        <textarea name="message" rows="4" placeholder="Your message"></textarea>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
