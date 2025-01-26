import React, { useEffect } from 'react'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'
import { ImageGallery } from '../assets/imagesgallery'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Images = () => {
     useEffect(() => {
                AOS.init({
                    duration: 600,
                    easing: 'ease-in-out',
                    once: true,
                    mirror: false
                  });
            
              }, []);
    
  return (
    <div className='ImageGallery block'>
      <Nav/>
      <div className="Ratio pt-24 " data-aos="fade-up">
        <h2>Some Images For Jomuna Resots</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde culpa optio vitae eos quo!</p>
      </div>
      <div className="Ratio block   mt-48  gap-8 pt-28 2xl:columns-4 xl:columns-3 sm:columns-1 lg:columns-2">
        {
         ImageGallery && ImageGallery.map( PhotoDetels =>(
            <div className="Imagess mb-8 cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                <img className='block mt-0 rounded-md' src={PhotoDetels.filePath} alt="" />
            </div>
         ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Images
