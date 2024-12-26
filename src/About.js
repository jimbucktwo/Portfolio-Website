import "./About.css";
import { Header, Footer } from "./Home";
import { useEffect } from "react";
import resume from "./Resume.pdf";

export default function About() {
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
    <div>
      <Header />
      <div className="about">
        <div className="about-section">
          <h2>Jimmy Tran</h2>
          <p id="about-1">
            {" "}
            Hi, I am currently enrolled at California State University, Long
            Beach and am in the midst of pursuing my Bachelors in Computer
            Science. My goals are to develop my web skills with emphasis on
            front-end aspects. Throughout my college degree, I have taken
            relevant courses such as:
          </p>
          <ul id="courses">
            <li>Data Structures and Algorithms</li>
            <li>Databases (Relational and NoSQL)</li>
            <li>Mobile App Development in Android</li>
            <li>Web Development</li>
          </ul>
          <p id="about-2">
            I also have experience working with various different software and
            frameworks, such as ReactJS, NodeJS, Android Studio, MongoDB, and
            GitHub to name a few. I am also curious to learn new technologies
            since I have a knack at picking things up quick. Click below to
            explore more about me!
          </p>
          <a href={resume} download="Resume (Jimmy Tran)">
            Resume
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
