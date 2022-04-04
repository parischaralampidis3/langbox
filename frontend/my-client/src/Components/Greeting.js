import React from 'react';


function Greeting() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
 
  if (hours < 12) {
    timeOfDay = 'morning';
 
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    
  } else {
    timeOfDay = 'night';
  }

  return (
      <div className='container mx-auto'> 
       <div className='text-xl font-bold'>
       <h1> Good {timeOfDay},</h1>
       </div>
       </div>
  
  )
};
export default Greeting;