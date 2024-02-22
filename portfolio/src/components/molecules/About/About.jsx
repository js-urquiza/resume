import React from 'react'

const About = (props) => {
  
  const { summary } = props.data;
  
  return (
    <>
      <h2>About</h2>
      <p>{summary}</p>
    </>
  )
}

export default About