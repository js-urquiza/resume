import React from 'react'
import './Hero.css'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = (props) => {
  
  const { name, label, image, email, phone } = props.data;
  const { city, region } = props.data.location;
  const profiles = props.data.profiles;
  
  return (
    <>
      <section className='hero'>
          <div className="info">
            <h1>{name}</h1>
            <h2>{label}</h2>
            <span>
              <PlaceIcon className='place-icon' />
              <p>
                {city}, {region}
              </p>
            </span>
            <footer>
              {
                email && (
                  <a href={`mailto:${email}`} title={`Send email to ${name}`} target='_blanc'>
                    <MailOutlineIcon className='icon' />
                  </a>
                )
              }
              {
                phone && (
                  <a href={`tel:${phone}`} title={`Call to ${phone}`} target='_blanc'>
                    <PhoneIcon className='icon' />
                  </a>
                )
              }
              {
                profiles.map(({ network, url, username }) => {
                  return (
                    <a key={network.index} href={url} title='Connect with me' target='_blanc'>
                      <LinkedInIcon className='icon' />
                    </a>
                  )
                })
              }
            </footer>
          </div>
          <figure>
            <img src={image} alt={name} />
          </figure>
      </section>
    </>
  );
}

export default Hero