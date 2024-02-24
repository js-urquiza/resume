import React, { useEffect, useState } from 'react'
import './Cv.css'
import cv from '../../../../db/cv.json'
import Hero from '../../../molecules/Hero/Hero'
import About from '../../../molecules/About/About'
import Experience from '../../../molecules/Experience/Experience'
import Skills from '../../../molecules/Skills/Skills'

const Cv = () => {
  
  return (
    <>
      <main className='cv'>
        <Hero data={cv.basics} />
        <About data={cv.basics} />
        <Experience data={cv.work} />
        <Skills data={cv.skills} />
      </main>
    </>
  )
}

export default Cv