import React, { useEffect } from 'react'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'
import { HeroImages } from '../assets/assist'

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
         useEffect(() => {
                    AOS.init({
                        duration: 600,
                        easing: 'ease-in-out',
                        once: true,
                        mirror: false
                      });
                
                  }, []);

  return (
    <div>
      <Nav />
        <div className='AboutPages mt-28'>
            <div className="Ratio " >
                <h2 data-aos='fade-up'>About Our Jomuna Resort</h2>
                <p className='w-2/5 mt-10' data-aos='fade-up'  data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae temporibus assumenda beatae? Odit sequi reprehenderit officia consequuntur hic, fugit nulla magni.</p>
            </div>
            <div className='mt-28'>
                <div className="Ratio flex items-center justify-between gap-24">
                    <div className="AboutImage w-1/2">
                        <img className=' rounded-md' src={HeroImages.Hero1} alt="" data-aos='fade-up' data-aos-delay="300" />
                    </div>
                    <div className="TextAreaAbout w-1/2" data-aos='fade-right' data-aos-delay="500">
                        <h3>Siam Hosen</h3>
                        <span className='block'>CEO form jomuna resort</span>
                        <p className='mt-10 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit laboriosam ullam sit eveniet ipsa, error sapiente rerum molestiae earum, ut magnam expedita! Voluptas illo iure, corrupti facere labore doloremque culpa, ut quibusdam mollitia, iste aperiam quae quo earum. Tempore voluptatibus molestias incidunt esse sequi consequuntur laudantium omnis iure culpa provident minima ratione cumque, soluta ullam! Id iure vitae magnam reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos explicabo enim.</p>
                        <img className='w-40 mt-10' src={HeroImages.SignuterIamge} alt="" />
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default About
