import React, { useEffect, useState } from 'react'
import './Cv.css'
import cv from '../../../../db/cv.json'
import Hero from '../../../molecules/Hero/Hero'
import About from '../../../molecules/About/About'
import Experience from '../../../molecules/Experience/Experience'
import Skills from '../../../molecules/Skills/Skills'
import Projects from '../../../molecules/Projects/Projects'
import Education from '../../../molecules/Education/Education'

const Cv = () => {
  
  return (
    <>
      <main className='cv'>
        <Hero data={cv.basics} />
        <About data={cv.basics} />
        <Experience data={cv.work} />
        <Education data={cv.education} />
        <Skills data={cv.skills} />
        <Projects data={cv.projects} />
      </main>
    </>
  )
}

export default Cv