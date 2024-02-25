import React from "react";
import "./Education.css";

const Education = (props) => {
  const education = props.data;

  return (
    <section className="education">
      <h2>Education</h2>
      <ul>
        {education.map((study) => {
          const startYear = new Date(study.startDate).getFullYear();
          const endYear =
            study.endDate == null
              ? "Current"
              : new Date(study.endDate).getFullYear();

          return (
            <li key={study.index}>
              <div className="heading">
                <a href={study.url} target="_blanc">
                  <h3>
                    {study.institution}{" "}
                    {study.area && <span className="area">{study.area}</span>}
                  </h3>
                </a>
                <div>
                  <span className="duration">
                    {startYear} - {endYear}
                  </span>
                </div>
              </div>
              <p>{study.studyType} in {study.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Education;
