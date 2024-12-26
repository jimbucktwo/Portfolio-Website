import './Work.css';
import {Header} from './Home';
import {useEffect} from 'react';

export default function Work() {
    useEffect(() => {
        const introElement = document.querySelector(".work");
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
        <div className="work">
        </div>
        </div>
    );
}