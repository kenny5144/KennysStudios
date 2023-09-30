import React from 'react'
import contact from "../images/homepageimages/contact.jpg"

const Contact = () => {
  return (
    <>
      <img className='mt-0' src={contact} alt="" />
      <h2 className='text-5xl text-center '>Contact Me</h2>

      <form className='w-9/12 justify-center m-auto '>
        <div>

        <p className='mt-7 '>YOUR NAME </p>
        <input type="name" className='p2 border-b-2 outline-none border-b-indigo-500' placeholder='Enter your name...' required />
        </div>
        <div>

        <p className='mt-7 '>EMAIL </p>
        <input type="email" placeholder='Enter your Email...' reqiuired />
        </div>
        <div>

        <p className='mt-7'>Occasion </p>
        <input type="text" placeholder='Booking occasion ' />
        </div>
        <div>

        <p className='mt-7'>DATE(ESTIMATED DATE ) </p>
        <input type="date" placeholder='Enter your name...' />
        </div>
        <div>
          <button  className='mt-7 rounded-md p-2 border border-slate-300 hover:border-indigo-300' >Submit </button>
        </div>
      </form>
    </>
  )
}

export default Contact
