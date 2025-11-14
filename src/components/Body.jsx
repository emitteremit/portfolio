import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../public/werk.png';
import { Link } from 'react-router-dom';

const Body = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 lg:gap-[200px] mt-[100px]'>
        <div className='order-2 md:order-1' data-aos="fade-right">
          <h1 className='text-2xl font-bold text-center lg:text-start '>Hello!, I am Temitope, a</h1>
          <p className='text-5xl font-bold'>Front-end developer</p>
          <p className='font-semibold mt-4 text-[20px]'>
            Transforming ideas into engaging digital experiences
            through innovative front-end development. I craft
            responsive, user-centric web applications that merge
            creativity with clean code, ensuring seamless interactions
            and robust security
          </p>
          <div className='hidden md:block'>
      </div>
          <p className='mt-4 text-[16px]'>Specialize in building user-centric web applications</p>
        <button className='bg-[#A4193D] text-[#FFDFB9] rounded-lg p-2 mr-5 mt-5'>
          <Link to='/contact'>
          contact me
          </Link>
        </button>
        </div>
        <div className='bg-[#FFDFB9] w-80 h-80 rounded-full flex justify-center items-center shadow-xl outline outline-5 outline-[#A4193D] drop-shadow-[0_0_15px_#A4193D] relative overflow-hidden order-1 md:order-2 mx-auto md:mx-0' data-aos="fade-left">
          <img src={img} alt="iamge" className='w-80 h-80 rounded-full object-cover'/>
        </div>
      </div>
      {/* <div className='mb-10 mx-auto max-w-6xl px-4'>
        <h1 className='text-center text-3xl font-bold underline mb-6'>About Me</h1>
        <p className='text-center text-lg'>
          I'm a passionate front-end developer with a strong focus on creating responsive, user-friendly, and visually appealing websites.
          My journey into web development began out of curiosity and quickly grew into a deep commitment to crafting seamless digital experiences.
        </p>
      </div> */}
      <div className='bg-[#A4193D] text-[#FFDFB9] py-10'>
        <h1 className='text-center text-3xl font-bold underline mb-6'>What I Do</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl px-4'>
          <div className='bg-[#FFDFB9] text-[#A4193D] p-6 rounded-lg shadow-md' data-aos="fade-up">
            <h2 className='text-xl font-bold mb-2'>Front-end Development</h2>
            <p>I build responsive, user-centric web applications using modern front-end technologies like HTML, CSS, JavaScript, and React.js.</p>
          </div>
          <div className='bg-[#FFDFB9] text-[#A4193D] p-6 rounded-lg shadow-md' data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-xl font-bold mb-2'>UI/UX Design</h2>
            <p>I design and develop visually appealing and user-friendly interfaces that provide seamless user experiences.</p>
          </div>
          <div className='bg-[#FFDFB9] text-[#A4193D] p-6 rounded-lg shadow-md' data-aos="fade-up" data-aos-delay="400">
            <h2 className='text-xl font-bold mb-2'>Web Development</h2>
            <p>I develop custom web applications that meet your business needs and provide a great user experience.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;