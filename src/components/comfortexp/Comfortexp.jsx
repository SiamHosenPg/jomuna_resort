import React, { useEffect } from 'react'
import { HeroImages } from '../../assets/assist'
import "./comfortexp.css"

import AOS from 'aos';
import 'aos/dist/aos.css';



const Comfortexp = () => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
    
      }, []);
    
    
  return (
    <section className='ComfortExp mt-48'>
        <div className="Ratio flex items-center justify-between gap-32">
            <div className="Image w-1/2" data-aos="fade-right"> <img className=' aspect-square rounded-md' src={HeroImages.Hero1} alt="" /></div>
            <div className="Texts w-1/2">
                <h2 className=' w-5/6' data-aos="fade-up"  data-aos-delay="300">We are provide best comfortable room</h2>
                <p className='mt-14' data-aos="fade-up"  data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione ullam ducimus, consequatur itaque deleniti quaerat sint id. Dolorem ipsum esse velit, similique suscipit optio aliquid odit, dolores aliquam, voluptatem iure enim?</p>
                <div className="Status flex items-center justify-between gap-14 mt-20 w-5/6" data-aos="fade-up"  data-aos-delay="700">
                    <div className=''>
                        <span className='text-7xl block font-medium'>21</span>
                        <span>Years Expreance</span>
                    </div>
                    <div className=''>
                        <span className='text-7xl block font-medium'>14</span>
                        <span>Award Granded</span>
                    </div>
                    <div className=''>
                        <span className='text-7xl block font-medium'>54</span>
                        <span>Project Complate</span>
                    </div>
                </div>
                <div className=' LearnBTN mt-12 flex items-center justify-start ' data-aos="fade-up"  data-aos-delay="900">
                    <button className='border border-blue-900 px-7 py-3 '>Learn more</button>
                    <div className='RightLine flex items-center'>
                        <div className='w-12 h-[2px] bg-blue-900'></div>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comfortexp
