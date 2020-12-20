import React from 'react';
import './postBody.css'


import DayAchivment from '../day achivment/DayAchivment';
import PostBodyHeader from './../postBodyHeader/postBodyHeader';

const postBody  =()=>{
    return(
        <div className='post__body'>
        <div className='dum-space'>

        </div>

        <div className='post__body--content'>
        <PostBodyHeader/>

      <div className='post__body--daysAchivments'>
      <DayAchivment/>
  
      
      </div>
        
       

        </div>

        </div>
    )
}

export default postBody