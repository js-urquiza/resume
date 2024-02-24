import React from 'react'
import './Hero.css'

const Hero = (props) => {
  
  const { name, label, image } = props.data;
  const { city, region } = props.data.location;
  
  return (
    <>
      <section className='hero'>
          <div className="info">
            <h1>{name}</h1>
            <h2>{label}</h2>
            <span>
              {/* Icon */}
              <p>
                {city}, {region}
              </p>
            </span>
          </div>
          <figure>
            <img src={image} alt={name} />
          </figure>
      </section>
    </>
  );
}

export default Hero