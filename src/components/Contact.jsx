import React from 'react';
import Title from './Title';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa6';
function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <form
          action='https://getform.io/f/lajkylxb'
          method='POST'
          className='flex flex-col w-full md:w-7/12'>
          <Title>Contact</Title>
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
          <div className='flex justify-between'>
            <button
              type='submit'
              className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-700 to-blue-500 drop-shadow-md '>
              Work With Me!
            </button>
            <div className='flex flex-row gap-2'>
              <a
                href='https://www.linkedin.com/in/zonglinsha'
                className='text-3xl'>
                <GrLinkedin />
              </a>
              <a href='https://github.com/shazonglin' className='text-3xl'>
                <FaGithub />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
