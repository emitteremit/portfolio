import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Formvalid = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    comment: ''
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const [errors, setErrors] = useState({})
  const validate = () => {
    const addError = {}
    if (!form.username) {
      addError.usernameError = 'Username is required'
    }
    if (!form.email) {
      addError.emailError = 'Email is required'
    }
    if (!form.comment) {
      addError.commentError = 'Comment is required'
    }
    return addError
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const check = validate()
    if (Object.keys(check).length > 0) {
      setErrors(check)
    }
    else {
      setForm({
        username: '',
        email: '',
        comment: ''
      })
      setErrors({})
    }
  }
  return (
    <>
      <Header />
      <div className='bg-[#FFDFB9] py-10'>
        <form onSubmit={handleSubmit} className="flex flex-col w-[100%] max-w-[500px] mx-[auto] mt-9 space-y-5 text-center bg-[#A4193D] p-5 rounded-lg shadow-md">
          <h2 className='text-2xl font-bold text-[#FFDFB9]'>Contact Form</h2>
          <div className="flex flex-col">
            <label className='text-[#FFDFB9]'>Username</label>
            <input type="text" name='username' value={form.username} onChange={handleChange} className="border border-[#FFDFB9] p-2 rounded" />
            <span className="text-[#FFDFB9]">{errors.usernameError}</span>
          </div>
          <div className="flex flex-col">
            <label className='text-[#FFDFB9]'>Email</label>
            <input type="email" name='email' value={form.email} onChange={handleChange} className="border border-[#FFDFB9] p-2 rounded" />
            <span className="text-[#FFDFB9]">{errors.emailError}</span>
          </div>
          <div className="flex flex-col">
            <label className='text-[#FFDFB9]'>Comment Here</label>
            <textarea name="comment" value={form.comment} onChange={handleChange} className="border border-[#FFDFB9] p-2 rounded" ></textarea>
            <span className="text-[#FFDFB9]">{errors.commentError}</span>
          </div>
          <button type="submit" className="bg-[#FFDFB9] text-[#A4193D] w-fit m-[auto] text-center p-3 rounded-lg hover:bg-[#FFDFB9]/80">SUBMIT</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Formvalid