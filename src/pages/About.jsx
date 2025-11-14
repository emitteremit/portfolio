import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <div className='py-20 px-4 md:px-8 lg:px-16 xl:px-32 flex justify-center'>
        <div className='bg-[#A4193D] w-[100%] max-w-[800px] p-[30px] rounded-lg shadow-md shadow-[#A4193D]' data-aos="zoom-in">
          <h1 className='text-[#FFDFB9] text-[30px] mb-3 outline-[#FFDFB9] text-center font-bold '>About Me</h1>
          <p className='text-[#FFDFB9] mb-[10px] capitalize' data-aos="fade-up" data-aos-delay="200">
            I am a passionate Front-end website developer with a strong focus on creating responsive, user-friendly, and visually appealing websites.
            My journey into web development began out of curiosity and quickly grew into a deep commitment to crafting seamless digital experiences.
          </p>
          <p className='text-[#FFDFB9] mb-[10px] capitalize' data-aos="fade-up" data-aos-delay="400">
            With a solid foundation in HTML, CSS, JavaScript, and modern libraries and frameworks like React.js, Tailwind CSS, Bootstrap, and SASS, I specialize in building clean, efficient, and accessible UIs.
            I have a keen eye for design, performance, and detail - ensuring that each component works smoothly across all devices and browsers.
          </p>
          <p className='text-[#FFDFB9] capitalize' data-aos="fade-up" data-aos-delay="600">
            I'm also familiar with version control (Git & GitHub), task automation, API integration, and responsive design principles.
            My goal is not just to build websites, but to bring ideas to life and create meaningful user experiences that leave a lasting impression.
            I'm constantly learning and exploring new tools to stay up-to-date with the ever-evolving web ecosystem.
            Whether working independently or collaborating with teams, I bring creativity, problem-solving, and dedication to every project.
          </p>
          <p className=' text-[#FFDFB9] mt-5' data-aos="fade-up" data-aos-delay="800">
            Looking forward to working with you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;