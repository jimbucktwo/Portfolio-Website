import './Contact.css';
import {Header} from './Home';
import {useEffect} from 'react';

export default function Contact() {
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
        <Header/>
        <div className="contact">
        </div>
        </div>
    );
}