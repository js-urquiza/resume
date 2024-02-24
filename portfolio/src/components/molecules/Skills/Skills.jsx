import React from 'react'
import './Skills.css'

const Skills = (props) => {
  
  const data = props.data;
  
  return (
    <section className='skills'>
      <h2>Skills</h2>
      <ul>
        {
          data.map(({ name }) => {
            return <li key={name.index}>{name}</li>
          })
        }
      </ul>
    </section>
  )
}

export default Skills