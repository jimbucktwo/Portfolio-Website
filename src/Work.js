import './Work.css';
import {Header, Footer} from './Home';
import {useEffect} from 'react';
import work from "./images/work.jpg";
import whizara_logo from "./images/whizara_logo.jpg";
import schoolhouse from "./images/schoolhouse.png";
import business from "./images/business.jpg";

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
          <h2>CS Instructor at</h2>
          <a href="https://www.whizara.com/" target="_blank" rel="noreferrer"><img src={whizara_logo} alt="Whizara" className="whizara-logo"/></a>
        </div>);
}

function Tutor() {
  useEffect(() => {
    const introElement = document.querySelector(".tutor");
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
    <div className="tutor">
      <h2>Tutor at</h2>
      <a href="https://schoolhouse.world/" target="_blank" rel="noreferrer"><img src={schoolhouse} alt="Schoolhouse" className="schoolhouse"/></a>
    </div>
  )
}

function Internship() {
  useEffect(() => {
    const introElement = document.querySelector(".internship");
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
    <div className="internship">
      <div className='internship-section'>
      <h2>Software Engineer Intern at</h2>
      <a href="https://www.businesswire.com/"><img src={business} alt="Business Wire" className="business"/></a>
    </div>
    </div>
  );
}


export default function Work() {
    return (
        <div>
        <Header/>
        <Workpage/>
        <Internship/>
        <Instructor/>
        <Tutor />
        <Footer/>
        </div>
    );
}