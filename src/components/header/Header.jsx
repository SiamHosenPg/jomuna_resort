import React, { useEffect } from 'react'
import './header.css'
import { HeroImages } from '../../assets/assist'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    
     useEffect(() => {
                  AOS.init({
                      duration: 600,
                      easing: 'ease-in-out',
                      once: true,
                      mirror: false
                    });
              
                }, []);
      
  return (
    <div className='Header w-full'>
        <div className=" Ratio  flex items-center justify-end  h-full">
            <div className="LeftText w-3/6 absolute left-0 bg-blue-900 text-white p-32 z-20" data-aos="zoom-in" data-aos-delay="300">
                <h2>Best Comfotable Beadroom for sleeping</h2>
                <p className=' mt-10 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquam odio. Ab architecto ad quas provident. Nostrum repudiandae et aliquid, facere rem iure dolore earum architecto modi impedit quae?</p>
            </div>
            <div className="Heros w-4/6 " data-aos="fade-left">
                
                <div className="image z-10 relative"><img className=' block rounded-lg overflow-hidden' src={HeroImages.Hero3} alt="" /></div>
                <div className='w-32 h-32 border-2 border-blue-900 rounded-lg absolute z-0 mt-[-90px] ml-[-40px]'></div>
                <div className="ScrollDown w-32 h-32 bg-blue-900 text-white flex items-center justify-center rounded-lg absolute z-10 mt-[-90px]"><i class="fa-solid fa-arrow-down text-2xl"></i></div>
            </div>
            <div className="LeyoutChange absolute   z-30">
                <div>
                    <div><i class="fa-solid fa-angle-up"></i></div>
                    <div className=' mt-6'><i class="fa-solid fa-angle-down"></i></div>
                </div>
                <div className='flex items-center justify-center flex-col mt-10 text-xl'> 
                    <div>2</div>
                    <div className=' line w-1 h-16 bg-blue-900'></div>
                    <div>4</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
