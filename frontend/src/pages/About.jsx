import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Founded in 2025, Cupid was created to help women feel empowered and beautiful in their everyday lives. Whether it’s a casual brunch, a festive celebration, or a romantic evening, our dresses are designed to help you make every moment special.</p>
              <p>We understand that the perfect dress isn’t just about how it looks – it’s about how it makes you feel. That’s why every piece we create is made with high-quality materials, thoughtful details, and flattering silhouettes tailored to fit real women.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Cupid, we believe fashion is more than just fabric – it’s how you express your confidence, creativity, and character. Born from a love for style and self-expression, Cupid is your go-to destination for dresses that are elegant, effortless, and unforgettable.</p>
              <p>To make beautiful, high-quality fashion accessible to every woman.
              To promote body positivity, individuality, and bold self-expression through clothing that feels as good as it looks.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
