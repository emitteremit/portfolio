import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShoppingCart = () => {
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        name: '',
        desc: '',
        price: '',
        image: null
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imageDir = URL.createObjectURL(file);
        setForm({ ...form, image: imageDir });
    };

    const validate = () => {
        const addError = {};
        if (!form.name) {
            addError.nameError = 'Products name is required';
        }
        if (!form.price) {
            addError.priceError = 'products price is required';
        }
        if (!form.desc) {
            addError.descError = 'product description is required';
        }
        if (!form.image) {
            addError.imageError = 'input image file';
        }
        return addError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const check = validate();
        if (Object.keys(check).length > 0) {
            setErrors(check);
        } else {
            setProducts([...products, form]);
            setForm({
                name: '',
                desc: '',
                price: '',
                image: null
            });
            setErrors({});
            setTimeout(() => {
                setShowForm(false);
            }, 1);
        }
    };

    return (
        <>
            <Header />
            <div className='container py-20 px-4 md:px-8 lg:px-16 xl:px-32'>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className='bg-[#A4193D] hover:bg-[#A4193D]/80 text-[#FFDFB9] font-bold py-2 px-4 rounded '
                >
                    {showForm ? 'Close Products' : 'Add Product'}
                </button>

                {showForm && (
                    <form onSubmit={handleSubmit} className='bg-[#FFDFB9] p-4 rounded-lg shadow-md'>
                        <div className='flex flex-col mb-4'>
                            <label>Products name</label>
                            <input type='text' name='name' value={form.name} onChange={handleChange} className='border border-[#A4193D] p-2 rounded' />
                            <span className='text-red-700'>{errors.nameError}</span>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label>Products price</label>
                            <input type='number' name='price' value={form.price} onChange={handleChange} className='border border-[#A4193D] p-2 rounded' />
                            <span className='text-red-700'>{errors.priceError}</span>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label>Product image</label>
                            <input type='file' name='image' onChange={handleImageChange} className='border border-[#A4193D] p-2 rounded' />
                            <span className='text-red-700'>{errors.imageError}</span>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label>Product description</label>
                            <textarea name='desc' value={form.desc} onChange={handleChange} className='border border-[#A4193D] p-2 rounded' />
                            <span className='text-red-700'>{errors.descError}</span>
                        </div>
                        <div className='flex justify-between'>
                            <button onClick={() => setShowForm(false)} className='bg-[#A4193D] hover:bg-[#A4193D]/80 text-[#FFDFB9] font-bold py-2 px-4 rounded'>
                                Cancel
                            </button>
                            <button type='submit' className='bg-[#A4193D] hover:bg-[#A4193D]/80 text-[#FFDFB9] font-bold py-2 px-4 rounded'>
                                Add Product
                            </button>
                        </div>
                    </form>
                )}

                {products.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {products.map((product, index) => (
                            <div key={index} className='bg-[#FFDFB9] p-4 rounded-lg shadow-md mt-[20px]  shadow-[#A4193D]'>
                                <img src={product.image} alt='product' className='w-full h-48 object-cover mb-4' />
                                <div className='flex  items-center'>
                                    <p className='text-xl font-semibold mb-2'>Product's Name:</p>
                                    <p>{product.name}</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-[#A4193D] mb-2 font-semibold'>Price:</p>
                                    <p>${product.price}</p>
                                </div>
                                <div className=''>
                                    <p className='text-[#A4193D] mb-2 font-semibold'>Products Description:</p>
                                    <p> {product.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-center mt-4 p-10 max-w-[900px] h-[500px] mx-auto flex justify-center items-center shadow-md shadow-[#A4193D]'>
                        Add items to cart
                    </p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ShoppingCart;