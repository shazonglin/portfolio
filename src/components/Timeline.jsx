import React from 'react';
import TimelineItem from './TimelineItem';
import timeline from './data/timeline';
import Title from './Title';

function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20 '>
      <div className='w-full md:w-7/12'>
        <Title>Experience</Title>
        {timeline.map((item, index) => (
          <TimelineItem
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
