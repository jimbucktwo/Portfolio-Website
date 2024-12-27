import './Work.css';
import {Header, Footer} from './Home';
import {useEffect} from 'react';
import work from "./images/work.jpg";
import whizara_logo from "./images/whizara_logo.jpg";


function Workpage() {
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
    <div className="work">
      <div className="work-section">
      <h2>Work</h2>
      <div className="img">
      <img src={work} alt="Work" className="work-img"/>
      </div>
      </div>
    </div>
  );
}

function Instructor(){
  useEffect(() => {
    const introElement = document.querySelector(".instructor");
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

    return(
        <div className="instructor">
          <h2>CS Instructor at Whizara</h2>
          <img src={whizara_logo} alt="Whizara" className="whizara-logo"/>
        </div>);
}

export default function Work() {
    return (
        <div>
        <Header/>
        <Workpage/>
        <Instructor/>
        <Footer/>
        </div>
    );
}