import React from 'react'
import './Projects.css'

const Projects = (props) => {

  const projects = props.data;
  
  return (
    <section className='projects'>
      <h2>Projects</h2>
        <ul>
            {
              projects.map(({ name, startDate, endDate, description, highlights, url }) => {
                return (
                  <li key={name.index}>
                    <article>
                      <header>
                        <a href={url} title={`See ${name}`} target='_black'>
                          <h3>{name}</h3>
                        </a>
                        <p>{description}</p>
                      </header>
                      <footer>
                          {
                            highlights.map((highlight) => {
                              return (
                                <span key={highlight.index}>{highlight}</span>
                              )
                            })
                          }
                      </footer>
                    </article>
                  </li>
                )
              })
            }
        </ul>
    </section>
  )
}

export default Projects