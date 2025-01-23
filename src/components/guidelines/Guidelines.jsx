import React, { useEffect } from 'react'
import { HeroImages } from '../../assets/assist'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Guidelines = () => {

     useEffect(() => {
            AOS.init({
                duration: 600,
                easing: 'ease-in-out',
                once: true,
                mirror: false
              });
        
          }, []);

  return (
    <div className='Guidelines mt-48'>
        <div className="Ratio flex items-center justify-between gap-24">
            <div className="TextArea w-1/2">
                <h2 data-aos="fade-up"  data-aos-delay="200">We provide next lavel service for theatre</h2>
                <div className='Guide mt-20'>

                    <div className='Box mt-6' data-aos="fade-up"  data-aos-delay="400">
                        <div className='flex items-center justify-start gap-12'>
                            <h3 className='w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center'>1</h3>
                            <h3>Briefing</h3>
                        </div>
                        <p className='pl-20 border-s-2 border-blue-900 ml-6 mt-6 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat autem nemo veniam libero eveniet debitis inventore qui veritatis, quae praesentium doloremque quo enim dicta? Soluta nemo reiciendis, aperiam quia neque ipsa mollitia. Sit, animi?</p>
                    </div>

                    <div className='Box mt-9' data-aos="fade-up"  data-aos-delay="600">
                        <div className='flex items-center justify-start gap-12'>
                            <h3 className='w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center'>1</h3>
                            <h3>Briefing</h3>
                        </div>
                        <p className='pl-20 border-s-2 border-blue-900 ml-6 mt-6  text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat autem nemo veniam libero eveniet debitis inventore qui veritatis, quae praesentium doloremque quo enim dicta? Soluta nemo reiciendis, aperiam quia neque ipsa mollitia. Sit, animi?</p>
                    </div>

                    <div className='Box mt-9' data-aos="fade-up"  data-aos-delay="800">
                        <div className='flex items-center justify-start gap-12'>
                            <h3 className='w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center'>1</h3>
                            <h3>Briefing</h3>
                        </div>
                        <p className='pl-20 border-s-2 border-blue-900 ml-6 mt-6 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat autem nemo veniam libero eveniet debitis inventore qui veritatis, quae praesentium doloremque quo enim dicta? Soluta nemo reiciendis, aperiam quia neque ipsa mollitia. Sit, animi?</p>
                    </div>


                </div>

            </div>
            <div className="image w-1/2" data-aos="fade-left">
                <img className=' aspect-square rounded-md' src={HeroImages.Hero2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Guidelines
