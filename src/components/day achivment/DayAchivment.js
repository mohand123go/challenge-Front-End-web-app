import React, { Component } from 'react';
import './DayAchivment.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'


import { RiMedalLine } from "react-icons/ri";


const DayAchivment = ()=>{
    const x = ()=>{
        const mediaQuery = window.matchMedia('(max-width: 350px)')
    
        // Check if the media query is true
        if (mediaQuery.matches) {
          // Then trigger an alert
          return '14'
        }
        return '15'
    }
    return(
        <div className='post__day-achivment'> 


            <p className='day-achivment__text'><span className='day-achivmen__dayNum'>#day1</span> install react app using NPX <a className='day-achivmen__see-more' href='#'>... <RiMedalLine  className='RiMedalLine' /></a></p>
            <div className='day-achivment__likes    '>
                <span className='day-achivment__likes-count' >
                    <img src={`https://img.icons8.com/color/${x()}/000000/triceps.png`}/>
                    <img src={`https://img.icons8.com/emoji/${x()}/000000/nikita-clapping-hands-emoji.png`}/>
                     609</span>
              
            </div>
         

        </div>

    )
}

export default DayAchivment