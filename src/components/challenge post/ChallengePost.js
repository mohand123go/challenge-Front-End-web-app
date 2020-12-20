import React from 'react';
import './ChallengePost.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FaRegComment } from "react-icons/fa";

import DayAchivment from './../day achivment/DayAchivment';
import { GiSandsOfTime } from "react-icons/gi";




const ChallengePost = ()=>{
    return(
        
            <div className=" challengePost post">
            <div className="post_header">
                <div className='post__avtar'>
                    <img  className='post__avtar--img' src={'/avtar.jpg'} alt='img'/>
                </div>
                <div className='post__info'>
                <h3 className='post-username' >mohand mostafa</h3>
                <span className='post-date'> nov 29 12:05 am</span>
                </div>
                <div className='post__remain-time'>
                    <GiSandsOfTime size='1.2em'/>
                    <span className='post__days_left'>25 days left</span>
                </div>
            </div>
            <div className='post__body'>
            <div className='dum-space'>

            </div>

            <div className=''>
            <p className='post__title'>learning React js , redux and hooks in 30 days </p>
           
            <div className='post__tags-holder'>
                <span className='post__tag'>#daysChallange</span>
                <span className='post__tag'>#FrontEndDeveloper</span>
                <span className='post__tag'>#Coding</span>
            </div>

           <DayAchivment/>

            </div>

          

            </div>
            
            <footer className='post__footer'>
            <div className='dum-space'>

            </div>
               <div className='post__footer-holder'>
               <div className='post__likesAndComment'>
                    <div className='Post__likesAndComment--left'>
                        <FavoriteBorderIcon/>
                        <span>609</span>
                    </div>
                    <div className='Post__likesAndComment--right'>
                        <FaRegComment size='1.30em'/>
                        <span>609</span>
                    </div>
                </div>
               
                <button className="post__followUp-btn">Follow Up</button>
               </div>
            </footer>
        </div>
        

        
    )
}

export default ChallengePost