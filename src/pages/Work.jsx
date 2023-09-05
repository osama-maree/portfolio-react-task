import React from "react";
import "../style/work.css";
import Title from "../component/Title.jsx";
import WorkSection from "../component/WorkSection.jsx";
const data = [
  {
    name: "grad.png",
    title: "A Website for the Palestinian Tabou",
    text: "The idea of this project is designing the TABOU website to meet the needs of the Palestinian citizen, Where citizens can complete the transactions related to their lands and follow up on their status in real time without going to the Land Registry Department",
    tech: [
      "HTML",
      "css",
      "sass",
      "Reactjs",
      "bootstrap",
      "react-bootstrap",
      "redux-toolkit query",
      "expressjs",
      "nodejs",
      "nosql(mongoDb)",
      "mvc pattern",
    ],
    prev: "https://www.linkedin.com/posts/osama-maree-7996b3239_react-frontend-nosql-activity-7078027388588109824-ATEo/?utm_source=share&utm_medium=member_android&fbclid=IwAR2mkVQScY1en75hnc1uN1ZiRpPBWDG-9bZ6R-T6dckPoJB3NawcwxV0Q1M",
    github: "https://github.com/osama-maree/graduation-project.git",
  },
  {
    name: "portfolio1.png",
    title: "Attractive Portfolio",
    text: "I independently developed a project to build my personal profile from scratch, apply front-end concepts such as routing, animation, and layout, to create a responsive and visually appealing design.",
    tech: [
      "HTML",
      "css",
      "sass",
      "Reactjs",
      "bootstrap",
      "react-bootstrap",
      "Nodemailer",
    ],
    prev: "https://osama-maree-portfolio.vercel.app/",
    github: "https://github.com/osama-maree/My-Portfolio.git",
  },
  {
    name: "chat.png",
    title: "Osama-Chat",
    text: "Developing a dynamic chatting platform! 🌐 Whether it's building a one-on-one chat feature, creating engaging group conversations, or managing member additions and removals, etx...",
    tech: [
      "HTML",
      "css",
      "Reactjs",
      "Chakra ui",
      "Context",
      "nodejs",
      "nosql(mongoDb)",
      "socket.io",
    ],
    prev: "https://www.linkedin.com/posts/osama-maree-7996b3239_reactjs-job-projects-activity-7083729905431003136-PvJH/?utm_source=share&utm_medium=member_android&fbclid=IwAR2M_5TCFNJ-Vpwi-Q62JZwmPQVF8fBONvOq3gJTyJ3h-UUm9GWVthr2hS8",
    github: "https://github.com/osama-maree/Chat.git",
  },
  {
    name: "task.png",
    title: "Osama-Task",
    text: "simple application on typescript , I learn recently typescript and this simple application yo can see source code and this deploy on netlify, A task completion application to what you learned in typeScript where you can add, delete and modify a task.",
    tech: ["HTML", "css", "Reactjs", "TypeScript"],
    prev: "https://gorgeous-croquembouche-6d4efe.netlify.app/",
    github: "https://github.com/osama-maree/todo_typeScipt",
  },
  {
    name: "umlBank.png",
    title: "Rest API for bank-system",
    text: "A real-world Bank System with registration, login, with JWT authentication, apply the concept of pagination and validation and authorization with three roles.",
    tech: [
      "javascript",
      "nodejs",
      "expressjs",
      "nodemailer",
      "nosql(mongodb)",
      "mvc pattern",
    ],
    prev: false,
    github: "https://github.com/osama-maree/Api-Bank",
  },
];
const Work = () => {
  return (
    <section class="work  p-75 bg-second-color" id="work">
      <div class="container">
        <Title title={"my works"} />
        {data.map((item, i) => (
          <WorkSection item={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Work;
