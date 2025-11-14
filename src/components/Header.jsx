import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from "../../public/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#A4193D] h-[55px] flex justify-between items-center text-[#FFDFB9] z-50'>
      <div className='ml-5 flex gap-1 items-center'>
        <img src={logo} alt="" className='w-10 h-10 rounded-[100%]' />
        <p className=' text-[18px] md:text-[25px] font-bold font-mono '>Temitope Portfolio</p>
      </div>
      <div className='hidden md:flex gap-4 mr-[35px]'>
        <Link to={'/'} className='font-bold hover:text-white capitalize'>home</Link>
        <Link to={'/skills'} className='font-bold hover:text-white capitalize'>Skills</Link>
        <Link to={'/contact'} className='font-bold hover:text-white capitalize'>Contact</Link>
        <Link to={'/about'} className='font-bold hover:text-white capitalize'>About me</Link>
        <Link to={'/projects'} className='font-bold hover:text-white capitalize'>projects</Link>
      </div>
      {/* <div className='hidden md:block'>
        <button className='bg-[#A4193D] border border-[#FFDFB9] hover:bg-[#FFDFB9] hover:text-[#A4193D] rounded-lg p-2 mr-5'>
          Hire me
        </button>
      </div> */}
      <div className='md:hidden mr-5 cursor-pointer' onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#A4193D] ease-in-out duration-500 z-40' : 'fixed left-[-100%]'}>
        <div className='p-4'>
          <p className='text-[18px] font-bold font-mono'>Temitope Portfolio</p>
        </div>
        <ul className='p-4'>
          <li className='py-4'>
            <Link to={'/'} className='font-bold hover:text-white capitalize'>home</Link>
          </li>
          <li className='py-4'>
            <Link to={'/skills'} className='font-bold hover:text-white capitalize'>Skills</Link>
          </li>
          <li className='py-4'>
            <Link to={'/contact'} className='font-bold hover:text-white capitalize'>Contact</Link>
          </li>
          <li className='py-4'>
            <Link to={'/about'} className='font-bold hover:text-white capitalize'>About me</Link>
          </li>
          <li className='py-4'>
            <Link to={'/projects'} className='font-bold hover:text-white capitalize'>projects</Link>
          </li>
        </ul>
        {/* <button className='bg-[#A4193D] border border-[#FFDFB9] hover:bg-[#FFDFB9] hover:text-[#A4193D] rounded-lg p-2 ml-4'>
          Hire me
        </button> */}
      </div>
    </div>
  );
};

export default Header;