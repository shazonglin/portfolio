import React from 'react';

function Intro() {
  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/zonglinsha', '_blank');
  };

  return (
    <div className='flex items-center justify-center flex-col  pt-20 pb-6 '>
      {/* <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">About Me</h1> */}
      <h2 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold '>About Me</h2>
      <p className='text-base md:text-xl mb-3 font-medium'>
        Software Engineer & Web Developer
      </p>
      {/* <p className='mb-2'>
        <span className='font-bold'>Linkedin:</span>{' '}
        <span
          className='cursor-pointer text-blue-800 font-semibold'
          onClick={handleLinkedin}>
          www.linkedin.com/in/zonglinsha
        </span>
      </p> */}
      <p className='text-base max-w-xl mb-6 '>
        Software engineer with passion about building modern web applications.
        <br /> <br />
        Proficient in Vue.js and has been using the library in the industry for
        developing portals and CRM web applications in the past years. Also
        learning React.js and its ecosystems including Redux for state
        management and UI libraries (Material UI, Ant Design).
        <br /> <br />
        Currently focusing on optimizing apps with Vue.js or React.js, and
        developing better state management solutions
      </p>
    </div>
  );
}

export default Intro;
