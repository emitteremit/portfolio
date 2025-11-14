import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contactus = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const addError = {};
        if (!form.name) {
            addError.nameError = 'Name is required';
        }
        if (!form.email) {
            addError.emailError = 'Email is required';
        }
        if (!form.message) {
            addError.messageError = 'Message is required';
        }
        return addError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const check = validate();
        if (Object.keys(check).length > 0) {
            setErrors(check);
        } else {
            setForm({
                name: '',
                email: '',
                message: ''
            });
            setErrors({});
            alert('Message sent successfully!');
        }
    };

    return (
        <>
            <Header />
            <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
                <div className=' bg-[#A4193D] p-5 rounded-lg  text-[#FFDFB9] shadow-md shadow-[#A4193D]' data-aos="zoom-in">
                    <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
                    <p className="text-center mb-12">Feel free to reach out to me for any questions or opportunities.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
                            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                            <p>Email: <a href="mailto:omodeletemitope12@gmail.com" className="text-blue-500 hover:text-blue-700">omodeletemitope12@gmail.com</a></p>
                            <p>Phone: <a href="tel:+2348144331503" className="text-blue-500 hover:text-blue-700">+234 8144331503</a></p>
                            <p>Location: Ibadan, Nigeria</p>
                        </div>
                        <form className="contact-form" data-aos="fade-left" data-aos-delay="400" onSubmit={handleSubmit}>
                            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                            <span className="text-[#FFDFB9]">{errors.nameError}</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                            <span className="text-[#FFDFB9]">{errors.emailError}</span>
                            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"></textarea>
                            <span className="text-[#FFDFB9]">{errors.messageError}</span><br />
                            <button className="bg-[#FFDFB9] hover:bg-[#FFDFB9]/80 text-[#A4193D] font-bold py-2 px-4 rounded-md">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contactus;