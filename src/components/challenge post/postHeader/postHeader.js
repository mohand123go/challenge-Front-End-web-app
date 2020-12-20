import React from 'react';
import './postHeader.css'
import { GiSandsOfTime } from "react-icons/gi";
const PostHeader = ()=>{
    return(
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
   
    )
}

export default PostHeader