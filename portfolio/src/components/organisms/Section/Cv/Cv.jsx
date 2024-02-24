import React, { useEffect, useState } from 'react'
import './Cv.css'
import cv from '../../../../db/cv.json'
import Hero from '../../../molecules/Hero/Hero'
import About from '../../../molecules/About/About'
import Experience from '../../../molecules/Experience/Experience'

const Cv = () => {
  
  const data = cv;
  
  return (
    <>
      <main className='cv'>
        <Hero data={data.basics} />
        <section>
          <About data={data.basics} />
          <Experience data={data.work} />
        </section>
      </main>
    </>
  )
}

export default Cv