import React, { useEffect, useState } from 'react'
import './Cv.css'
import cv from '../../../../db/cv.json'
import Hero from '../../../molecules/Hero/Hero'
import About from '../../../molecules/About/About'

const Cv = () => {
  
  const data = cv;
  
  return (
    <>
      <main className='cv'>
        <Hero data={data.basics} />
        <section>
          <About data={data.basics} />
        </section>
      </main>
    </>
  )
}

export default Cv