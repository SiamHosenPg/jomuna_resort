import React, { useEffect } from 'react'
import './footer.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

     useEffect(() => {
                AOS.init({
                    duration: 600,
                    easing: 'ease-in-out',
                    once: true,
                    mirror: false
                  });
            
              }, []);

  return (
    <div className='Footer  mt-48 text-center'>
        <div className="topFoot w-1/2 m-auto">
            <h2 className='leading-relaxed' data-aos="fade-up" data-aos-delay="100">Subscribe to get the latest news for about us</h2>
            <p className='mt-10 leading-relaxed' data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vero harum itaque dolorem qui, placeat sequi dignissimos fuga et quas delectus impedit molestias laborum.</p>
            <form action="" className='SubscribeBox w-full bg-white flex items-center justify-between mt-20 px-2 py-2 rounded-md relative z-20' data-aos="fade-up" data-aos-delay="500">
                <input className=' w-3/4 px-28' type="email" placeholder='Type your email address' />
                <button className=' w1/4 block bg-blue-900 text-white px-24 py-7 rounded-md'>Subscribe</button>
            </form>
        </div>
        <div className="FooterBtm bg-blue-900 py-32 text-white pt-56 mt-[-50px] relative z-10">
            <div className="Ratio flex items-start justify-between text-left gap-14">
                <div className="Lft w-2/6">
                    <div className="Logo text-xl font-bold">Jomuna Resort</div>
                    <p className=' mt-10 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita recusandae esse, provident modi voluptates rerum? Omnis blanditiis vero mollitia beatae consequatur voluptate ad, eligendi totam excepturi. Quos, libero velit.</p>
                </div>
                <div className="Rt w-4/6 flex items-start justify-between">
                    <ul>
                        <li className=' mb-10'><h4 className='text-white'>Abouts</h4></li>
                        <li>About Company</li>
                        <li>About US</li>
                        <li>About Founder</li>
                        <li>About Socal Clients</li>
                    </ul>
                    <ul>
                        <li className=' mb-10'><h4 className='text-white'>Company</h4></li>
                        <li>Our team</li>
                        <li>Foundation history</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li className=' mb-10'><h4 className='text-white' >Support</h4></li>
                        <li>Account</li>
                        <li>Support center</li>
                        <li>Feedback</li>
                        <li>Contract Us</li>
                        <li>Accessibilities</li>
                    </ul>
                    <ul>
                        <li className=' mb-10'><h4 className='text-white'>Get in touch</h4></li>
                        <li>Question for feedback</li>
                        <li>Who love this foundation</li>
                        <li>About Socal Clients</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
