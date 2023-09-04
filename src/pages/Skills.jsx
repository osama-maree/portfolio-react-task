import React from "react";
import Title from "../component/Title.jsx";
import "../style/skills.css";
import SkillsSection from "../component/SkillsSection.jsx";
const leftItem = [
  { name: "html.png", title: "HTML", per: 95 },
  { name: "sass.png", title: "CSS & SASS", per: 91 },
  { name: "js.jpg", title: "JavaScript", per: 80 },
  { name: "react.png", title: "ReactJS", per: 70 },
  { name: "ts.png", title: "TypeScript", per: 30 },
];
const rightItem = [
  { name: "php.png", title: "PHP", per: 50 },
  { name: "node.png", title: "NodeJS", per: 81 },
  { name: "express.jpg", title: "ExpressJS", per: 83 },
  { name: "mongo.png", title: "NoSQL(MongoDB)", per: 70 },
  { name: "sql.png", title: "SQL(MySQL, SQL Server)", per: 80 },
];
const data = [
  { title: "Frontend", data: leftItem },
  { title: "Backend", data: rightItem },
];
const Skills = () => {
  return (
    <section className="skills bg-first-color p-75" id="skills">
      <div className="container">
        <Title title={"skills"} />
        <p className="center-text">
          Through my self-study and some courses, I learned these skills, and I
          am constantly updating my information to keep up with the technical
          development in real time.
        </p>
        <div className="skillsContainer grid">
          {data.map((item, i) => (
            <SkillsSection data={item.data} title={item.title} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
