import "./About.css";
import { Header, Footer } from "./Home";
import { useEffect } from "react";
import resume from "./Resume.pdf";
import peanut from "./images/peanut.jpg";
import jimmy from "./images/jimmy.JPEG";

function Bio() {
  useEffect(() => {
    const introElement = document.querySelector(".about");
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
    <div className="about">
      <div className="about-section">
        <img src={jimmy} alt="Jimmy" className="jimmy"/>
        <h2>Jimmy Tran</h2>
        <p id="about-1">
          Hi! I am currently enrolled at California State University, Long Beach
          and am in the midst of pursuing my Bachelors in Computer Science.
        </p>
      </div>
    </div>
  );
}

function Courses() {
  useEffect(() => {
    const introElement = document.querySelector(".courses");
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
    <div className="courses">
      <div className="courses-section">
        
      <h2>Past/Future Courses</h2>
      
      <ul className="courses-list">
        <li>Artificial Intelligence</li>
        <li>Cybersecurity</li>
        <li>Data Structures and Algorithms</li>
        <li>Databases (Relational and NoSQL)</li>
        <li>Machine Learning</li>
        <li>Mobile App Development in Android</li>
        <li>Networking</li>
        <li>Object-Oriented Programming</li>
        <li>Operating Systems</li>
        <li>Systems Programming</li>
        <li>Web Development</li>
      </ul>
      </div>
    </div>
  )
}


function Experience() {
  useEffect(() => {
    const introElement = document.querySelector(".experience");
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
    <div className="experience">
      <div className="experience-section">
        
      <ul className="experience-list">
        <li>MongoDB</li>
        <li>React</li>
        <li>GitHub</li>
        <li>Android Studio</li>
        <li>PostGres</li>
        <li>Visual Studio Code</li>
        <li>Google Cloud Platform</li>
      </ul> 
          
      
      <h2>Experience</h2>
      </div>
      <a href={resume} download="Resume (Jimmy Tran)" className="resume1">
          Resume
          </a>
    </div>
  )
}


export default function About() {
  return (
    <div>
      <Header />
      <Bio />
      <Courses />
      <Experience />
      <Footer />
    </div>
  );
}
