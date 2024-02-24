import React from 'react'
import './Experience.css'

const Experience = (props) => {
  
  const work = props.data;
  console.log(work);
  
  return (
    <section className='experience'>
      <h2>Work experience</h2>
      <ul>
        {
          work.map((work) => {
            
            const startYear = new Date(work.startDate).getFullYear();
            const endYear = work.endDate == null ? 'Current' : new Date(work.endDate).getFullYear()
            
            return (
              <li key={work.index}>
                <div className="heading">
                    <h3>
                      {work.name}{" "}
                      {work.mode && <span className="mode">{work.mode}</span>}
                    </h3>
                  <div>
                    <span className='duration'>
                      {startYear} - {endYear}
                    </span>
                  </div>
                </div>
                <h4>{work.position}</h4>
                <p>{work.summary}</p>
              </li>
            );
          })
        }
      </ul>
    </section>
  )
}

export default Experience