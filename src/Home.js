import "./Home.css";
import { useState, useEffect } from "react";
import intro from "./images/intro.jpeg";
import {Link} from "react-router-dom";
import flappy from "./images/flappy.png";
import fridge from "./images/fridge.jpeg";
import holidays from "./images/holidays.jpg";
import school from "./images/longbeach.jpg";

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
          <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
            <p>Home</p>
          </Link>
        </div>
        <div className="header-work">
        <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
            <p>Work</p>
        </Link>
        </div>
        <div className="header-about">
        <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
            <p>About</p>
          </Link>
        </div>
        <div className="header-contact">
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
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
        <img src={intro} alt="intro"></img>
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
    const images = [flappy, fridge, holidays];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      
      const interval = setInterval(() => {
          setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
  }, [images.length]);


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
            threshold: 0.3, 
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
      <div className="project-outer">
        <div className="project disc">
          <p>Projects</p>
        </div>
        <div className="projects-grid">
        
        <div className="project">
          <a href="https://github.com/jimbucktwo"
              target="_blank"
              rel="noreferrer"><img src={images[currentImage]} alt="current"></img></a>
        </div>
      </div>
      
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

export function Footer() {
    return (
        <div className="footer">
        <ul className="socialicons">
          <li>
            <a
              href="https://www.linkedin.com/in/jimmy-tran1023/"
              target="_blank"
              className="transition" rel="noreferrer"
              >&#xeac9;</a>
          </li>
          <li>
            <a
              href="https://github.com/jimbucktwo"
              target="_blank"
              className="transition" rel="noreferrer"
              >&#xeab0;</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jimothytran/"
              target="_blank"
              className="transition" rel="noreferrer"
              >&#xea92;</a>
          </li>
          <li>
            <a
              href="https://replit.com/@JimmyTran26"
              target="_blank"
              className="transition" rel="noreferrer"
              >&#xeaa7;</a>
          </li>
        </ul>
            <p> Jimmy Tran - Web Developer &copy; 2024</p>
        </div>
    );

}

function Resume() {
  useEffect(() => {
    const introElement = document.querySelector(".resume");
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
    <div className="resume">
      <div className="resume-desc">
        <img src={school} alt="California State University, Long Beach"></img>
        <div className="bio">
        <p>CSULB Undergrad</p>
        <p>B.S. in Computer Science, GPA of 3.9 <Link to="/about" className="learn">(Learn More)</Link></p>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  useEffect(() => {
    const introElement = document.querySelector(".home-contact");
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
    <div className="home-contact">
        <p>Curious?</p>
        <p>Connect with me!</p>
        <div className="contact-link"><Link to="/contact">Email</Link></div>
    </div>
  )
}
export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
