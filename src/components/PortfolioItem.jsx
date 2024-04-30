import React from 'react';
// Project item components
function PortfolioItem({ title, imgUrl, stack, link }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };
  return (
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
      <img
        src={imgUrl}
        alt='project'
        className='w-full h-36 md:h-48 object-cover cursor-pointer'
        onClick={handleClick}
      />
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
          {title}
        </h3>
        <div className='flex flex-wrap flex-row items-center justify-start gap-2 text-sm md:text-base'>
          {stack.map((item, index) => (
            <span
              key={index}
              className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
