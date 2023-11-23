import React from 'react'
import Slider from 'react-slick'
import ava01 from './ava-1.jpg'
import ava02 from './ava-2.jpg'
import ava03 from './ava-3.jpg'
import ava04 from './ava -4.jpg'
import ava05 from './ava -5.jpg'



const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>

<div className="testimonial py-4 px-3">
         <p>"I've always dreaded the hassle of booking flights, but this travel agency's website turned the experience into a comedy extravaganza! From quirky travel quotes to unexpected travel trivia, they've nailed the art of making you smile while planning your dream getaway. Highly recommended for a laughter-filled travel booking experience!""
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Mia malkova</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>






      <div className="testimonial py-4 px-3">
         <p>"Booking my vacation through this travel agency was an absolute riot! The website is so user-friendly that even my grandma could plan a trip without breaking a sweat. The only downside is that my abs are now in better shape than ever from all the laughter. Who knew travel planning could be this entertaining?"
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Surya Ganesh</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"This booking website turned my travel planning stress into a comedy show. 
            The process was so entertaining that I almost didn't care where 
            I was going – I just wanted to keep clicking
             and laughing. The only reason I'm not giving it a perfect score is that my cat didn't find it as amusing as I did."
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Mia Khalifa</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      




      <div className="testimonial py-4 px-3">
         <p>"I didn't expect a travel website to have me laughing so hard! The clever wordplay and humorous prompts made the whole booking experience a delight. I'm just deducting one star because now my family thinks I've gone crazy, cackling at my computer while planning our getaway. Worth it!"
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Sasha Grey</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"I never thought planning a trip could be this entertaining! The travel agency's website is a comedy goldmine. I laughed so hard at the travel puns that my pet parrot now repeats them. The only reason I'm not giving it a perfect score is that my parrot is a harsh critic."
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava05} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Johny Sins</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials