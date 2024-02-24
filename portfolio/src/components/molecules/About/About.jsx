import React from 'react'

const About = (props) => {
  
  const { summary } = props.data;
  
  return (
    <section>
      <h2>About</h2>
      <p>{summary}</p>
    </section>
  )
}

export default About