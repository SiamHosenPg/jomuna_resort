import React from 'react'
import { ProfileImage } from '../../assets/assist'

const Testimonial = () => {
  return (
    <div className='Testimonail mt-48'>
        <div className="Ratio">
            <div className="Top flex items-center justify-between">
                <h2>We oure coustumar are saying</h2>
                <div className='flex justify-end gap-16'>
                    <button className='  '><i class="fa-solid fa-angle-left text-3xl"></i></button>
                    <button><i class="fa-solid fa-angle-right text-3xl"></i></button>
                </div>
            </div>

            <div className="TextArea mt-16 flex  gap-14">

                    <div className="Card w-1/2 px-16 py-12 bg-blue-100 text-black rounded-lg">
                        <img className='mt-5 w-28 opacity-50' src={ProfileImage.TextTestimonial} alt="" />
                        <h3 className='mt-5'>Yours sarvice Given ar best comfort and satesfite</h3>
                        <p className=' mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est iure architecto corrupti, neque excepturi numquam quaerat dolore dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto?</p>
                        <div className='flex items-center gap-5 mt-8'>
                            <img className='w-20 h-20 object-cover block rounded-full' src={ProfileImage.Pf1} alt="" />
                            <div className="user">
                                <b className='text-lg block'>Siam Hosen</b>
                                <span className='block text-sm'>Khulna Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    <div className="Card w-1/2 px-16 py-12 bg-blue-100 text-black rounded-lg">
                        <img className='mt-5 w-28 opacity-50' src={ProfileImage.TextTestimonial} alt="" />
                        <h3 className='mt-5'>Yours sarvice Given ar best comfort and satesfite</h3>
                        <p className=' mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est iure architecto corrupti, neque excepturi numquam quaerat dolore dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto?</p>
                        <div className='flex items-center gap-5 mt-8'>
                            <img className='w-20 h-20 object-cover block rounded-full' src={ProfileImage.Pf1} alt="" />
                            <div className="user">
                                <b className='text-lg block'>Siam Hosen</b>
                                <span className='block text-sm'>Khulna Bangladesh</span>
                            </div>
                        </div>
                    </div>


            </div>

        </div>
    </div>
  )
}

export default Testimonial
