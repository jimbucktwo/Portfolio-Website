import "./About.css";
import { Header, Footer } from "./Home";
import { useEffect } from "react";
import resume from "./Resume.pdf";
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
        As a web developer, I am passionate about creating dynamic and user-friendly web applications. With a strong foundation in Computer Science, I have experience working with modern technologies such as MongoDB, React, and GitHub.
        </p>
        <a href={resume} download="Resume (Jimmy Tran)" className="resume1">
          Resume
          </a>
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
        
      <h2>Coursework</h2>
      
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
        <li>React Native</li>
        <li>Next.js</li>
        <li>TailwindCSS</li>
        <li>AWS</li>
        <li>Visual Studio Code</li>
        <li>Google Cloud Platform</li>
      </ul> 
          
      
      <h2>Tech Tools</h2>
      </div>
      
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
