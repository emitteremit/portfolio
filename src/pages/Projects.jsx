import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import img from "../../public/Todo.png";
import shop from "../../public/shop.png";
import form from "../../public/form.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'To-do list',
      description: `A simple and responsive To-DO list app that allows users to add,
       delete and manage tasks efficiently built using Reactjs and Tailwind,
        it helps improve productivity by keeping track of daily tasks in a clean, 
        user-friendly interface`,
      image: img,
      link: '/todolist',
    },
    {
      id: 2,
      title: 'ShoppingCart',
      description: `A functional Shopping cart web app that lets users browse view produtcs,
       add items to their acrt, update quantites, price and message. Built with Reactjs and 
       Tailwind, it stimulates a basic E-commerce experience witha focus on interactive UI 
       and Dynamic cart management`,
      image: shop,
      link: '/ShoppingCart',
    },
    {
      id: 3,
      title: 'Form',
      description: `A responsive form with real time validation built using reactJs and Tailwind,
       it checks for required fields, proper email formatting, and matching confirmation fields, 
       ensuring users input accurate and complete information before submission`,
      image: form,
      link: '/Form',
    },
    // Add more projects here
  ];

  return (
    <>
      <Header />
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={project.link} key={project.id}>
              <div className="bg-white rounded-md shadow-md shadow-[#A4193D] h-[100%] max-h-[700px]" data-aos="fade-up">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-xl font-bold mb-2 p-6">{project.title}</h3>
                <p className="text-gray-600 p-6">{project.description}</p>
                <button className='bg-[#A4193D] text-[#FFDFB9] px-4 py-2 ml-[30px] mb-[20px] rounded-md'>
                  View
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Projects;