import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
     <section 
     className='hero is-fullheight is-family-  secondary' 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(' +              'https://lscs-development-media.s3.amazonaws.com/IMG_3334.JPG' + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

        }}>

    <Fragment>
      <Hero />
       <HomeContent />
    </Fragment>
    </section>
  )
}
