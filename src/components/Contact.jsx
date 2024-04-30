import React from 'react';

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <h2 className='text-xl flex items-center justify-center text-center py-2 font-bold'>
        Contact
      </h2>
      <div className='flex flex-col justify-center items-center'>
        <form
          action='https://getform.io/xxxxx'
          method='POST'
          className='flex flex-col w-full md:w-7/12'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />{' '}
          <input
            type='text'
            name='email'
            placeholder='Your Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Message here!'
            rows='10'
            className='p-2 mb-4 border-2 rounded-md focus:outline-none'
          />
          <button
            type='button'
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-700 to-blue-500 drop-shadow-md '>
            Work With Me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
