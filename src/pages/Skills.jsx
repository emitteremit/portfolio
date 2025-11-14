import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <Header/>
            <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
                <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
                        <h3 className="text-xl font-bold mb-4">Front-end Development</h3>   
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="skill-card bg-white p-6 rounded-md  shadow-md shadow-[#A4193D]" data-aos="fade-up">
                        <h3 className="text-xl font-bold mb-4">languages, Libaries & FrameWork</h3>       
                        <ul className="list-disc pl-4">
                            <li className="mb-2">HTML5</li>
                            <li className="mb-2">CSS3</li>
                            <li className="mb-2">SASS</li>
                            <li className="mb-2">Bootstrap</li>
                            <li className="mb-2">Tailwind CSS</li>
                            <li className="mb-2">JavaScript</li>
                            <li className="mb-2">React.js</li>
                        </ul>
                    </div>
                    <div className="skill-card bg-white p-6 rounded-md shadow-md shadow-[#A4193D]" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-bold mb-4">Version Control</h3>
                        <ul className="list-disc pl-4">
                            <li className="mb-2">Git</li>
                            <li className="mb-2">GitHub</li>
                        </ul>
                    </div>
                    <div className="skill-card bg-white p-6 rounded-md shadow-md shadow-[#A4193D]" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                        <ul className="list-disc pl-4">
                            <li className="mb-2">Responsive Web Design</li>
                            <li className="mb-2">Cross-browser Compatibility</li>
                            <li className="mb-2">Web Accessibility</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Skills;