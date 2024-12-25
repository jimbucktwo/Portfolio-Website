import "./Home.css";
import { useState, useEffect } from "react";
import logo from "./logo192.png";
import intro from "./intro.jpeg";
import weather from "./weatherlogo.png";
import {Link} from "react-router-dom"

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector(".header");
      if (currentScrollPos > prevScrollPos) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="home">
      <div className="header">
        <nav>
        <div className="header-name">
          <Link to="/home">
            <p>Jimmy Tran</p>
          </Link>
        </div>
        <div className="header-work">
        <Link to="/work">
            <p>Work</p>
        </Link>
        </div>
        <div className="header-about">
        <Link to="/about">
            <p>About</p>
          </Link>
        </div>
        <div className="header-contact">
        <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        </nav>
      </div>
    </div>
  );
}

function Desc() {
    useEffect(() => {
        const introElement = document.querySelector(".intro-section");
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
    <div className="intro-section">
      <div className="intro-desc">
        <p>Jimmy Tran</p>
        <p>Front-end Web Developer</p>
      </div>
      <div className="intro-img">
        <img src={intro}></img>
      </div>
    </div>
  );
}


function Intro() {
  useEffect(() => {
    const introElement = document.querySelector(".intro");
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
    <div className="intro">
        <Desc />
    </div>
  );
}

function Grid() {
    useEffect(() => {
        const introElement = document.querySelector(".projects-grid");
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
        <div className="projects-grid">
        <a href="#">
          <img src={weather}></img>
        </a>
        <a href="#">
          <img src={weather}></img>
        </a>
        <a href="#">
          <img src={weather}></img>
        </a>
      </div>
    )
}
function Projects() {
    useEffect(() => {
        const introElement = document.querySelector(".projects");
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
    <div className="projects">
      <Grid />
    </div>
  );
}

function Footer() {
    return (
        <div className="footer">
        <ul className="socialicons">
          <li>
            <a
              href="https://www.linkedin.com/in/jimmy-tran1023/"
              target="_blank"
              className="transition"
              >&#xeac9;</a>
          </li>
          <li>
            <a
              href="https://github.com/jimbucktwo"
              target="_blank"
              className="transition"
              >&#xeab0;</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jimothytran/"
              target="_blank"
              className="transition"
              >&#xea92;</a>
          </li>
          <li>
            <a
              href="https://replit.com/@JimmyTran26"
              target="_blank"
              className="transition"
              >&#xeaa7;</a>
          </li>
        </ul>
            <p>Jimmy Tran   -  Web Developer</p>
        </div>
    );

}

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}
