import React from "react";
import "../style/about.css";
import Title from "../component/Title.jsx";
import AboutSection from "../component/AboutSection.jsx";
const leftData = [
  {
    icon: <i className="fa-solid fa-graduation-cap" />,
    title: "Palestine Technical University-Kadoorie",
    text: "In 2019, I started studying Computer Systems Engineering at Palestine Technical University-Kadoorie. While studying, I  provided educational courses for free to students. I discussed my graduation project in July 2023 With GPA: 86.",
    date: "2019-2023",
    link: false,
  },
  {
    icon: <i class="fa-sharp fa-solid fa-chalkboard-user"></i>,
    title: "Qarawat Bani Hassan Secondary School ",
    date: "2018-2019",
    text: "In 2019, I finished high school (Tawjihi) with distinction in the scientific stream level with AVG: 93, During my school years, I participated in several competitions, most notably the citizenship project in 2014, and we qualified for the competition at the national.",
    link: false,
  },
];

const rightData = [
  {
    icon: <i class="fa-brands fa-react"></i>,
    title: "Self-Study + Knowledge Academy",
    text: "In 2021, I began to study the frontend development by myself, and I finished Html, CSS, JS, bootstrap, and ReactJS.In the end, I took a React course with the Knowledge Academy, and I reviewed my information in it in frontend.",
    date: "2021-now",
    link: "https://drive.google.com/file/d/1r34RM_D2yUtL1VwoeDiyHVkM4Jbyy9ew/view?usp=sharing",
  },
  {
    icon: <i class="fa-solid fa-terminal"></i>,
    title: "Self-Study + Knowledge Academy",
    date: "2022-now",
    link: "https://drive.google.com/file/d/1yuMJQg45-eH_xhqT7-gva4uR67G8iEll/view?usp=sharing",
    text: "In 2022, I began to study the backend development by myself, and studied the basics such as authentication and authorization and pagination, etc. When I finished, I took a course with Knowledge Academy. I reviewed all my information in backend.",
  },
];
const aboutData = [
  { title: "Education", data: leftData },
  { title: "Experience", data: rightData },
];
const About = () => {
  return (
    <section className="about p-75 bg-second-color" id="about">
      <div className="container">
        {<Title title={"about me"} />}
        <p className="center-text">
          I have the ability to explain and communicate.{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLV6N0id9zWHR-UuWR3iTCzERfri4qXhf0"
            target="_blank"
          >
            I explained some courses, and here is an algorithms course whose
            lectures were uploaded for free on the YouTube platform.
          </a>
        </p>
        <div className="row">
          {aboutData.map((about, indx) => (
            <AboutSection title={about.title} data={about.data} key={indx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
