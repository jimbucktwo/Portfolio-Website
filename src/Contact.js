import "./Contact.css";
import { Header, Footer } from "./Home";
import { useEffect, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehiwe2p",
        "template_l00zn3v",
        form.current,
        "6Bui4W8fr-R9L5Kzz"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Email failed to send. Please try again.");
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    const introElement = document.querySelector(".contact");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          introElement.classList.add("fade-in");
        } else {
          introElement.classList.remove("fade-in");
        }
      },
      {
        threshold: 0.3, // Adjust this value as needed
      }
    );

    if (introElement) {
      observer.observe(introElement);
    }

    return () => {
      if (introElement) {
        observer.unobserve(introElement);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="contact">
        <div className="contact-section">
          
        <h2>Need help? Contact me!</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="from_name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="message" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
      <Footer />
    </div>
  );
}
